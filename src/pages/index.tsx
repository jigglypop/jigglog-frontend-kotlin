import { useAtomValue } from "jotai";
import { dehydrate, QueryClient } from "react-query";
import { getCategoriesApi } from "../api/Category";
import Meta from "../components/common/meta/Meta";
import Responsive from "../components/common/responsive/Responsive";
import ThreeOuter from "../components/Three/ThreeOuter";
import { categoriesAtom } from "../store/categories/atom";
import { toJson } from "../util/toJson";

export default function App() {
  const categories = useAtomValue(categoriesAtom);
  return (
    <Responsive>
      <Meta />
      <ThreeOuter categorySet={categories.categories} />
    </Responsive>
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
