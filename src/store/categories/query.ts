import { useAtom } from "jotai";
import { useMutation, useQuery } from "react-query";
import { getCategoriesApi } from "../../api/Category";
import { categoriesAtom } from "./atom";
import { useEffect } from "react";

export function useCategoriesActions() {
  const [categories, setCategories] = useAtom(categoriesAtom);
  const { mutate, isLoading, isError, error } = useMutation(getCategoriesApi, {
    onSuccess(res) {
      setCategories({
        ...categories,
        categories: res,
      });
    },
    onError(res: Error) {
      setCategories({
        ...categories,
        error: "오류 : " + res.message,
      });
    },
  });
  return { categories, getCategories: mutate, isLoading, isError, error };
}

export function useCategoriesEffect() {
  const { data, isLoading, isError, error } = useQuery(
    ["categories"],
    getCategoriesApi
  );
  const [_, setCategories] = useAtom(categoriesAtom);
  useEffect(() => {
    setCategories({
      error: error ? error.toString() : "",
      categories: data || [],
    });
  }, [data, isLoading, isError]);
  return { categories: data?.data || [], isLoading, isError, error };
}
