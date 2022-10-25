// // 필요한 모듈 로드
const axios = require("axios");
const fs = require("fs");
const prettier = require("prettier");

// // 오늘 날짜 가져오기 & 도메인 설정
const getDate = new Date().toISOString();
const formatted = (sitemap) => prettier.format(sitemap, { parser: "html" });

// axios 메서드
const getMatch = (data) => {
    return data
        .split("<br>")[0]
        .match(/Error: (.)+/)[0]
        .replace("Error: ", "");
};

const headers = {
    "Content-Type": "application/json",
    Authorization: "",
};

const makeErrorMessage = (err) => {
    const errJson = err.toJSON();
    if (err.reponse && err.response.data) {
        errJson.err = getMatch(err.response.data);
    } else {
        errJson.err = "페이지 오류";
    }
    return errJson;
};

const Api = () => {
    const get = async (URL) => {
        try {
            const response = await axios.get(URL);
            return response;
        } catch (err) {
            return makeErrorMessage(err);
        }
    };

    return {
        get,
    };
};
// 포스트 패스
const getPostPathApi = async (SERVER_URL) => {
    return await Api().get(`${SERVER_URL}/post/path`);
};
// 카테고리 패스
const getCategoriesApi = async (SERVER_URL) => {
    return await Api().get(`${SERVER_URL}/category`);
};
// 태그 패스
const getTagsApi = async (SERVER_URL) => {
    return await Api().get(`${SERVER_URL}/tag`);
};
// 포트폴리오 패스
const getPortfoliosApi = async (SERVER_URL) => {
    return await Api().get(`${SERVER_URL}/portfolio`);
};

(async () => {
    console.log("메인 사이트맵 구동");
    const BASE_URL = "https://moija.link";
    const SERVER_URL = `${BASE_URL}/api`;
    const MAIN_URL = "https://jigglog.com";

    // 정적 임포트
    const { globby } = await import("globby");
    const pages = await globby([
        // include
        "src/pages/**/*.tsx",
        "src/pages/*.tsx",
        // 동적 페이지 (빌드 후)
        ".next/server/pages/post/*.html",
        ".next/server/pages/tag/*.html",
        ".next/server/pages/category/*.html",
        ".next/server/pages/portfolio/*.html",
        // // exclude
        "!src/pages/_app.tsx",
        "!src/pages/_document.tsx",
        "!src/pages/write.tsx",
        "!src/pages/**/[id].tsx",
    ]);

    // 파일 경로를 도메인 형태로 변경
    const pagesSitemap = [];
    const List = [];
    // 포스트 리스트 가져오기
    const postpath = await getPostPathApi(SERVER_URL);
    postpath.data.data.forEach((post) =>
        List.push({ id: post.id, type: "post" })
    );
    // 카테고리 리스트 가져오기
    const categorypath = await getCategoriesApi(SERVER_URL);
    categorypath.data.data.forEach((category) =>
        List.push({ id: category.id, type: "category" })
    );
    // 태그 리스트 가져오기
    const tagpath = await getTagsApi(SERVER_URL);
    tagpath.data.data.forEach((tag) => List.push({ id: tag.id, type: "tag" }));
    // 포트폴리오 리스트 가져오기
    const portfoliopath = await getPortfoliosApi(SERVER_URL);
    portfoliopath.data.data.forEach((portfolio) =>
        List.push({ id: portfolio.id, type: "portfolio" })
    );

    List.forEach((item) => {
        pagesSitemap.push(`
        <url>
          <loc>${`${MAIN_URL}/${item.type}/${item.id}`}</loc>
          <changefreq>daily</changefreq>
          <priority>1</priority>
        </url>
        `);
    });

    const generatedSitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
          <urlset
            xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
            ${pagesSitemap
                .map((item) => {
                    return `${item}`;
                })
                .join("")}
          </urlset>`;
    const formattedSitemap = formatted(generatedSitemap);

    fs.writeFileSync("public/sitemap.xml", formattedSitemap, "utf8");
})();
