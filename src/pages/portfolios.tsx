import React from "react";
import { QueryClient } from "react-query";
import { getCategoriesApi } from "../api/Category";
import Meta from "../components/common/meta/Meta";
import NotFound from "../components/common/notfound/NotFound";
import Spinner from "../components/common/spinner/Spinner";
import Portfolios from "../components/portfolios";
import { usePortfoliosEffect } from "../store/portfolios/query";
import { toJson } from "../util/toJson";

export default function PortfoliosPage() {
  const { portfolios, isSuccess, isLoading, isError, error } =
    usePortfoliosEffect();

  return (
    <>
      <Meta description={"jigglypop 포트폴리오 목록"} />
      {isSuccess && <Portfolios />}
      {isLoading && <Spinner />}
      {isError && <NotFound />}
    </>
  );
}
export const getServerSideProps = async ({ params }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["categories"], getCategoriesApi);
  return {
    props: {
      dehydratedState: toJson(queryClient),
    },
  };
};
