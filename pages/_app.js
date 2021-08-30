import Layout from "../components/Layout";
import GlobalStyle from "../global/GlobalStyle";
import { AppWrapper } from "../context/state";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
    </>
  );
}

export default MyApp;
