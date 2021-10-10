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
import Slider from "react-slick";

const IndexWrapper = styled.div`
  .preview-box {
    display: flex;
    flex-direction: column;

    .card {
      flex: 1 1 100%;
      display: flex;
      margin-bottom: 50px;

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
      }
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

  .text-container {
    display: flex;
    flex-direction: column;
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

var settings = {
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
        {/*      <Hero /> */}

        <Slider className="slider" {...settings}>
          {content.indices[0].indexImage.map((e, index) => {
            return (
              <div className="image-container">
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
                <Button>
                  <Link scroll={false} href={`/infos/${e.slug}`}>
                    Weitere Infos
                  </Link>
                </Button>
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
