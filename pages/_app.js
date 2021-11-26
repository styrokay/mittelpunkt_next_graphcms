import Layout from "../components/Layout";

import { AppWrapper } from "../context/state";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../lib/seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Willkommen"
        titleTemplate="mittelpunkt | %s"
        description="Angebot für Freizeit und Ferienbegleitung für Menschen mit einer geistigen, psychischen oder körperlichen Beeinträchtigung"
        {...SEO}
      />
      <AppWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
    </>
  );
}

export default MyApp;
