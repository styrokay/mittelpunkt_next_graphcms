import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getPreviewServices, getIndexData, getPreviewNews } from "../lib/data";
import styled from "styled-components";
import Container from "../components/Container";
import Button from "../components/Button";

import { RichText } from "@graphcms/rich-text-react-renderer";

import Moment from "react-moment";
import Slider from "react-slick";
import media from "styled-media-query";

const IndexWrapper = styled.div`
  box-sizing: border-box;

  .announce {
    margin: 100px 0;
  }

  .preview-box {
    display: flex;
    flex-direction: column;

    .card {
      flex: 1 1 100%;
      display: flex;
      margin-bottom: 50px;
      ${media.lessThan("medium")`
      flex-direction: column;
      `}

      .content {
        display: flex;
        flex-direction: column;
        width: 100%;
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
        ${media.lessThan("medium")`
    margin: 30px 0 30px 0;
      `}
      }
      .description {
        display: flex;
        flex-direction: column;
        margin: 30px 0 30px 0;
        font-size: 21px;
      }

      button {
        margin-top: auto;
        align-self: flex-end;
      }
    }
  }

  .lead-text {
    display: flex;
    flex-direction: column;
    font-size: 21px;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    /*     box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16); */
    padding: 30px;
    margin: 30px 0;
    position: relative;

    ::after {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 4px;
      content: "";
      background: ${({ theme }) => theme.colors.primary};
    }

    button {
      margin-left: auto;
    }
    .link {
      margin: auto 0 auto auto;
      padding: 1rem;
      a {
        font-size: 21px;
        color: white;
        position: relative;
        text-decoration: none;
      }
    }
  }
  .hero {
    position: relative;

    .text-overlay {
      position: absolute;
      bottom: 0;
      margin: 10px;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
  .hero-text {
    font-size: 30px;
    margin: 30px 0 0 0;
  }
  .slider {
    display: block;

    .image-container {
      width: 100%;

      > div {
        position: unset !important;
      }

      .image {
        object-fit: cover;
        width: 100% !important;
        position: relative !important;
        min-height: 600px !important;
        ${media.lessThan("medium")`
min-height: 300px !important;
`}
      }
    }
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  height: 400px;
  min-width: 50%;
  margin-right: 3rem;
`;

var settings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export default function Home({ data, content, news }) {
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
        <Slider className="slider" {...settings}>
          {content.indices[0].indexImage.map((e, index) => {
            return (
              <div key={index} className="image-container">
                <Image
                  quality={"100"}
                  className={"image"}
                  layout="fill"
                  src={e.url}
                />
              </div>
            );
          })}
        </Slider>

        <Container>
          <Container maxwidth="700px">
            <div className="hero-text">
              <p>
                Angebot für Freizeit und Ferienbegleitung für Menschen mit einer
                geistigen, psychischen oder körperlichen Beeinträchtigung
              </p>
            </div>
            <div className="lead-text announce">
              <h1>{content.indices[0].title}</h1>
              <RichText content={content.indices[0].description.raw} />
            </div>
          </Container>

          <section className="announce">
            <h1>Aktuell</h1>
            {news.infos.map((e, index) => {
              return (
                <>
                  <div key={index} className="text-container">
                    <h3> {e.title}</h3>
                    <p>{e.description}</p>
                    <Button>
                      <Link scroll={false} href={`/infos/${e.slug}`}>
                        Weitere Infos
                      </Link>
                    </Button>
                  </div>
                  <div className="space" />
                </>
              );
            })}
          </section>

          <section className="announce">
            <h1>Agenda </h1>
            <div className="preview-box">
              {data.services.map((e, index) => {
                return (
                  <>
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
                    <div className="space" />
                  </>
                );
              })}
            </div>
          </section>
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
