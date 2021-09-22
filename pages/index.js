import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getPreviewServices, getIndexData, getPreviewNews } from "../lib/data";
import styled from "styled-components";
import Container from "../components/Container";
import Button from "../components/Button";
import Hero from "../components/Hero";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Slide from "react-awesome-reveal";
import Moment from "react-moment";

const IndexWrapper = styled.div`
  .preview-box {
    display: flex;
    flex-direction: column;

    .card {
      flex: 1 1 100%;
      display: flex;
      margin-bottom: 30px;

      .content {
        display: flex;
        flex-direction: column;
      }
      .date {
        position: absolute;
        font-size: 2rem;
        bottom: 0;
        right: 0;
        color: white;
        padding: 1rem;
        margin: 1rem;
        background-color: ${({ theme }) => theme.colors.primary};
      }
      h3 {
        margin: 0;
      }
      .description {
        display: flex;
        flex-direction: column;
      }

      button {
        margin-top: auto;
        align-self: flex-start;
      }
    }
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  height: 200px;
  min-width: 50%;
  margin-right: 3rem;
`;

export default function Home({ data, content, news }) {
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
        <Hero />

        <Container>
          <h1>{content.indices[0].title}</h1>
          <Container maxwidth="700px">
            <div className="text-container">
              <RichText content={content.indices[0].description.raw} />
            </div>
          </Container>
          <h1>Aktuell</h1>
          {news.infos.map((e, index) => {
            return (
              <div key={index} className="text-container">
                <h3> {e.title}</h3>
                <p>{e.description}</p>
                <Link scroll={false} href={`/infos/${e.slug}`}>
                  Weitere Infos
                </Link>
              </div>
            );
          })}
          <h1>Agenda </h1>
          <div className="preview-box">
            {data.services.map((e, index) => {
              return (
                <div className="card" key={index}>
                  <ImgWrapper>
                    <Image
                      alt="Vorschau Angebot"
                      src={e.images[0].url}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="date">
                      {" "}
                      {e.date != null ? (
                        <Moment format="DD. MMMM YYYY" locale="de">
                          {e.date}
                        </Moment>
                      ) : null}
                    </div>
                  </ImgWrapper>
                  <div className="content">
                    <h3>{e.title}</h3>
                    <div className="description">{e.description}</div>
                    <Button>
                      <Link scroll={false} href={`/angebot/${e.slug}`}>
                        Weitere Infos
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </IndexWrapper>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await getPreviewServices();
  const content = await getIndexData();
  const news = await getPreviewNews();
  return {
    props: {
      data,
      content,
      news,
    },
  };
};
