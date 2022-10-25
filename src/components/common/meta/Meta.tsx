import Head from "next/head";
import React from "react";

export interface IMeta {
  title?: string;
  description?: string;
}

export default function Meta({ title, description }: IMeta) {
  const meta = {
    title: title || "jigglog",
    description: description || "지글로그에 오신 것을 환영합니다",
    cardImage: "",
  };
  return (
    <Head>
      <title>
        {meta.title} | {meta.description}
      </title>
      <link rel="shortcut icon" href="/facivon.ico" />
      <meta
        name="google-site-verification"
        content="lQSJTzJQx3zqrAtN51Lw8DDLnPjoaEa8xVJMVmmpY6Y"
      />
    </Head>
  );
}
