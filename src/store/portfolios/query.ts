import { useAtom } from "jotai";
import { useQuery } from "react-query";
import { getPortfoliosApi } from "../../api/Portfolio";
import { portfoliosAtom } from "./atom";

// export function usePortfoliosActions() {
//   const [portfolios, setPortfolios] = useAtom(portfoliosAtom);

//   const getPortfolios = async () => {
//     const portfoliosResponse = await getPortfoliosApi();
//     if (portfoliosResponse.status === 200) {
//       await setPortfolios({
//         error: "",
//         portfolios: portfoliosResponse.data.data,
//       });
//     } else {
//       await setPortfolios({
//         ...portfolios,
//         error: portfoliosResponse.err,
//       });
//     }
//   };

//   return {
//     getPortfolios,
//   };
// }

export const usePortfoliosEffect = () => {
  const [portfolios, setPortfolios] = useAtom(portfoliosAtom);
  const { isSuccess, isLoading, isError, error } = useQuery(
    "portfolios",
    getPortfoliosApi,
    {
      onSuccess(res) {
        setPortfolios({
          portfolios: res,
          error: "",
        });
      },
      onError(res: Error) {
        setPortfolios({
          portfolios: [],
          error: "오류 : " + res.message,
        });
      },
    }
  );
  return { portfolios, isSuccess, isLoading, isError, error };
};
