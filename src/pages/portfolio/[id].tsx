import React from "react";
import Meta from "../../components/common/meta/Meta";
import { IPortfolio } from "../../type/portfolio";
import { getPortfolioApi, getPortfoliosApi } from "../../api/Portfolio";
import { usePortfolioEffect } from "../../store/portfolio/query";
import Portfolio from "../../components/resume_portfolio/portfolio";
import { dehydrate, QueryClient } from "react-query";
import Spinner from "../../components/common/spinner/Spinner";
import NotFound from "../../components/common/notfound/NotFound";

function PortfolioPage() {
  const { portfolio, isSuccess, isLoading, isError, error } =
    usePortfolioEffect();
  return (
    <>
      {isSuccess && portfolio.portfolio && (
        <>
          <Meta
            description={
              portfolio.portfolio.title + " | " + portfolio.portfolio.summary
            }
          />
          <Portfolio portfolio={portfolio.portfolio} />
        </>
      )}
      {isLoading && <Spinner />}
      {isError && <NotFound />}
    </>
  );
}

export async function getServersideProps({ params }) {
  const { id } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("portfolio", () =>
    getPortfolioApi(parseInt(id as string))
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default PortfolioPage;
