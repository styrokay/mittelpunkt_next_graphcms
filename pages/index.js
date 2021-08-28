import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getPreviewServices } from "../lib/data";
import styled from "styled-components";

const ImgWrapper = styled.div`
  position: relative;
  height: 380px;
  width: 690px;
`;

export const getServerSideProps = async () => {
  const data = await getPreviewServices();
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>mittelpunkt</title>
        <meta
          name="description"
          content="Angebot für Freizeit und Ferienbegleitung für Menschen mit einer geistigen, psychischen oder körperlichen Beeinträchtigung"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1>WILLKOMMEN</h1>

        {data.services.map((e, index) => {
          return (
            <div key={index}>
              <p>{e.title}</p>
              <ImgWrapper>
                <Image
                  alt="Vorschau Angebot"
                  src={e.images[0].url}
                  layout="fill"
                  objectFit="cover"
                />
              </ImgWrapper>
              <div>{e.description}</div>
              <Link href={`/angebot/${e.slug}`}>Weitere Infos</Link>
            </div>
          );
        })}
      </main>
    </div>
  );
}
