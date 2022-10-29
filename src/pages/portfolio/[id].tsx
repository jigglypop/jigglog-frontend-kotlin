import React from "react";
import Meta from "../../components/common/meta/Meta";
import { getPortfolioApi } from "../../api/Portfolio";
import { usePortfolioEffect } from "../../store/portfolio/query";
import Portfolio from "../../components/resume_portfolio/portfolio";
import { dehydrate, QueryClient } from "react-query";
import Spinner from "../../components/common/spinner/Spinner";
import NotFound from "../../components/common/notfound/NotFound";
import { getCategoriesApi } from "../../api/Category";

function PortfolioPage({ id }) {
  const { portfolio, isSuccess, isLoading, isError, error } =
    usePortfolioEffect(id);
  return (
    <>
      {isSuccess && portfolio && (
        <>
          <Meta description={portfolio?.title + " | " + portfolio?.summary} />
          <Portfolio portfolio={portfolio} />
        </>
      )}
      {isLoading && <Spinner />}
      {isError && <NotFound />}
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const id = params?.id as string;
  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery(["portfolio", id], () => getPortfolioApi(id)),
    queryClient.prefetchQuery(["categories"], getCategoriesApi),
  ]);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id: id,
    },
  };
};

export default PortfolioPage;
