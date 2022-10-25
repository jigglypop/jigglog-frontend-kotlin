import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../style/global-styles";
import { theme } from "../style/theme";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import Toast from "../components/common/toast/Toast";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useAtomsDevtools } from "jotai/devtools";
import { useState } from "react";
import { useUserQueryEffect } from "../store/user/query";
import { useCategoriesEffect } from "../store/categories/query";
import Header from "../components/header/Header";
import ModalOuter from "../components/modalouter/ModalOuter";

// const Header = dynamic(import("../components/header/Header"), {
//   loading: () => <div>LOADING</div>,
//   ssr: false,
// });
// const ModalOuter = dynamic(import("../components/modalouter/ModalOuter"), {
//   loading: () => <div>LOADING</div>,
//   ssr: false,
// });

const AtomsDevtools = ({ children }) => {
  useAtomsDevtools("demo");
  return children;
};

function UserQueryEffect({ children }) {
  useCategoriesEffect();
  useUserQueryEffect();
  return children;
}

export interface AppPropsDe extends AppProps {
  pageProps: {
    dehydratedState: unknown;
  };
}

function MyApp({ Component, pageProps }: AppPropsDe) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <AtomsDevtools>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <UserQueryEffect>
            <Head>
              <link rel="shortcut icon" href="/images/favicon.ico" />
            </Head>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Header />
              <ModalOuter />
              <Component {...pageProps} />
              <Toast />
            </ThemeProvider>
          </UserQueryEffect>
        </Hydrate>
      </QueryClientProvider>
    </AtomsDevtools>
  );
}

export default MyApp;
