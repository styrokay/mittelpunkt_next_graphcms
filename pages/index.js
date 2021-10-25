import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getPreviewServices, getIndexData, getPreviewNews } from "../lib/data";
import styled from "styled-components";
import Container from "../components/Container";
import Button from "../components/Button";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Card from "../components/Card";

import Slider from "react-slick";
import media from "styled-media-query";

const IndexWrapper = styled.div`
  box-sizing: border-box;

  .announce {
    margin: 100px 0;

    .text-container {
      display: flex;
      flex-direction: column;
      /*     box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16); */
      padding: 0 20px;
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
  }

  .lead-text {
    display: flex;
    flex-direction: column;
    font-size: 21px;
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
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Angebot für Freizeit und Ferienbegleitung für Menschen mit einer geistigen, psychischen oder körperlichen Beeinträchtigung"
        />
      </Head>
      <IndexWrapper>
        <Slider className="slider" {...settings}>
          {content.indices[0].indexImage.map((e, index) => {
            return (
              <div key={index} className="image-container">
                <Image
                  alt="Bild Mittelpunkt"
                  quality={"80"}
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
                <div key={index}>
                  <div className="text-container">
                    <h3> {e.title}</h3>
                    <p>{e.description}</p>
                    <Button>
                      <Link scroll={false} href={`/infos/${e.slug}`}>
                        Weitere Infos
                      </Link>
                    </Button>
                  </div>
                  <div className="space" />
                </div>
              );
            })}
          </section>

          <section>
            <h1>Agenda </h1>
            <div>
              {data.services.map((e, index) => {
                return <Card data={e} key={index}></Card>;
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
