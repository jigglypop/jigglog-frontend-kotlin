import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getPortfolioApi } from "../../api/Portfolio";
import { portfolioAtom } from "./atom";

export const usePortfolioEffect = () => {
  const [portfolio, setPortfolio] = useAtom(portfolioAtom);
  const router = useRouter();
  const { id } = router.query;
  const { isSuccess, isLoading, isError, error } = useQuery(
    "portfolio",
    () => getPortfolioApi(parseInt(id as string)),
    {
      staleTime: 1000,
      onSuccess(res) {
        if (res.data) {
          setPortfolio({
            portfolio: res.data.data,
            error: "",
          });
        }
      },
      onError(res: { message: string }) {
        setPortfolio({
          portfolio: null,
          error: "오류 : " + res.message,
        });
      },
    }
  );
  return { portfolio, isSuccess, isLoading, isError, error };
};
