import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getPortfolioApi } from "../../api/Portfolio";
import { portfolioAtom } from "./atom";

export const usePortfolioEffect = (id: string) => {
  const [portfolio, setPortfolio] = useAtom(portfolioAtom);
  const { data, isSuccess, isLoading, isError, error } = useQuery(
    "portfolio",
    () => getPortfolioApi(id),
    {
      // staleTime: 1000,
      onSuccess(res) {
        setPortfolio({
          portfolio: res,
          error: "",
        });
      },
      onError(res: Error) {
        setPortfolio({
          portfolio: null,
          error: "오류 : " + res.message,
        });
      },
    }
  );
  return { portfolio: data, isSuccess, isLoading, isError, error };
};
