import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getPreviewServices, getIndexData } from "../lib/data";
import styled from "styled-components";
import Container from "../components/Container";
import Button from "../components/Button";
import Hero from "../components/Hero";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Slide from "react-awesome-reveal";

const IndexWrapper = styled.div`
  .preview-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 30px;

    .card {
      flex: 1 50%;

      .description {
        display: flex;
        flex-direction: column;
      }

      button {
        margin-top: auto;
        align-self: flex-end;
      }
    }
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  height: 380px;
`;

export const getServerSideProps = async () => {
  const data = await getPreviewServices();
  const content = await getIndexData();

  return {
    props: {
      data,
      content,
    },
  };
};

export default function Home({ data, content }) {
  console.log(content);
  return (
    <>
      <Head>
        <title>mittelpunkt</title>
        <meta
          name="description"
          content="Angebot für Freizeit und Ferienbegleitung für Menschen mit einer geistigen, psychischen oder körperlichen Beeinträchtigung"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <IndexWrapper>
        <Slide>
          <Hero />
        </Slide>
        <Container>
          <h1>{content.indices[0].title}</h1>
          <Container maxwidth="700px">
            <div className="text-container">
              <RichText content={content.indices[0].description.raw} />
            </div>
          </Container>
          <h1>Aktuell</h1>
          <div className="preview-box">
            {data.services.map((e, index) => {
              return (
                <Slide>
                  <div className="card" key={index}>
                    <ImgWrapper>
                      <Image
                        alt="Vorschau Angebot"
                        src={e.images[0].url}
                        layout="fill"
                        objectFit="cover"
                      />
                    </ImgWrapper>
                    <p>{e.title}</p>
                    <div className="description">{e.description}</div>
                    <Button>
                      <Link href={`/angebot/${e.slug}`}>Weitere Infos</Link>
                    </Button>
                  </div>
                </Slide>
              );
            })}
          </div>
        </Container>
      </IndexWrapper>
    </>
  );
}
