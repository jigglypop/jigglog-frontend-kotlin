import { useEffect, useState } from "react";
import * as S from "./style";

export default function Toc() {
  // 여기
  const [tocEls, setTocEls] = useState(null);
  useEffect(() => {
    const tocItems = document.querySelectorAll("h1, h2");
    tocItems.forEach((tocitem, index) => {
      tocitem.classList.add(`toctextlink${index}`);
    });
    setTocEls(tocItems);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tocitemall = document.querySelectorAll(".tocitem");
          tocitemall.forEach((items) => items.classList.remove("isintersect"));
          const entryId = entry.target.className.replace("toctextlink", "");
          const tocItem = document.querySelector(`#tocitem${entryId}`);
          const toctextitem = document.querySelector(`.toctextlink${entryId}`);
          if (tocItem && toctextitem) {
            tocItem.classList.add("isintersect");
          }
        }
      });
    });
    if (tocItems) {
      tocItems.forEach((tocEl) => {
        observer.observe(tocEl);
      });
    }
    return () => observer && observer.disconnect();
  }, []);

  // 스크롤하기
  const onClick = (e) => {
    const targettext: any = document.querySelector(
      `.toctextlink${e.currentTarget.id.replace("tocitem", "")}`
    );
    if (targettext) {
      window.scrollTo({
        top: targettext.offsetTop - 200,
        behavior: "smooth",
      });
    }
  };
  return (
    <S.VisibleTable>
      {tocEls &&
        [...tocEls].map((item: any, index: number) => (
          <S.TocItemDiv
            key={index}
            className={`tocitem ${item.innerText}`}
            id={`tocitem${index}`}
            onClick={(e) => onClick(e)}
          >
            <h4>{item.innerText}</h4>
          </S.TocItemDiv>
        ))}
    </S.VisibleTable>
  );
}
