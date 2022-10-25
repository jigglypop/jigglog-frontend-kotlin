import React from "react";
import { QueryClient } from "react-query";
import { getCategoriesApi } from "../api/Category";
import { getResumeApi } from "../api/Resume";
import Meta from "../components/common/meta/Meta";
import NotFound from "../components/common/notfound/NotFound";
import Spinner from "../components/common/spinner/Spinner";
import Resume from "../components/resume_portfolio/resume";
import { useResumeEffect } from "../store/resume/query";
import { toJson } from "../util/toJson";

export default function ResumePage() {
  const { resume, isSuccess, isLoading, isError } = useResumeEffect();
  return (
    <>
      {isSuccess && resume.data && (
        <>
          <Meta description={"이력서"} />
          <Resume resume={resume.data.data} />
        </>
      )}
      {isLoading && <Spinner />}
      {isError && <NotFound />}
    </>
  );
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["resume"], getResumeApi);
  await queryClient.prefetchQuery(["categories"], getCategoriesApi);
  return {
    props: {
      dehydratedState: toJson(queryClient),
    },
  };
};
