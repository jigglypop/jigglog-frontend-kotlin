import { useAtom } from "jotai";
import { useMutation, useQuery } from "react-query";
import { getCategoriesApi } from "../../api/Category";
import { categoriesAtom } from "./atom";
import { useEffect } from "react";
import { ICategoryHeader } from "../../type/category";

export function useCategoriesActions() {
  const [categories, setCategories] = useAtom(categoriesAtom);
  const { mutate, isLoading, isError, error } = useMutation(getCategoriesApi, {
    onSuccess(res) {
      setCategories({
        ...categories,
        categories: res.data.data.filter((category: ICategoryHeader) => {
          if (category.id !== 1 && category.posts !== 0) {
            return category;
          }
        }),
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
      categories:
        data?.data.data.filter((category: ICategoryHeader) => {
          if (category.id !== 1 && category.posts !== 0) {
            return category;
          }
        }) || [],
    });
  }, [data, isLoading, isError]);
  return { categories: data?.data.data || [], isLoading, isError, error };
}
