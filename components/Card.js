import React from "react";
import styled from "styled-components";
import Moment from "react-moment";
import "moment/locale/de-ch";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import media from "styled-media-query";

const CardWrapper = styled.div`
  display: flex;
  margin: 60px 0;

  ${media.lessThan("medium")`

flex-direction: column;
`}

  .image-container {
    position: relative;
    height: 400px;
    min-width: 50%;
    margin-right: 3rem;
    flex: 1;
    ${media.lessThan("medium")`
    width: 100%;
    flex: 1 1 300px;
    `}

    .title {
      position: absolute;
      font-size: 2rem;
      bottom: 0;
      right: 0;
      color: white;
      padding: 1rem;
      margin: 1rem;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;
    flex: 1;

    h3 {
      margin: 0 0 1rem 0;
      ${media.lessThan("medium")`
     margin: 1rem 0 0 0;
    `}
    }

    p {
      margin: 0;
      ${media.lessThan("medium")`
         margin: 30px 0;
    `}
    }

    button {
      margin-top: auto;
      align-self: flex-end;
    }
  }
`;

const Card = ({ data: { title, date, images, description, slug } }) => {
  return (
    <CardWrapper>
      <div className="image-container">
        <Image
          alt="Vorschau Angebot"
          src={images[0].url}
          layout="fill"
          quality="10"
          priority={true}
          objectFit="cover"
        />
        <div className="title">
          <h3>
            {date ? (
              <Moment format="DD. MMMM YYYY" locale="de-ch">
                {date}
              </Moment>
            ) : (
              title
            )}
          </h3>
        </div>
      </div>

      <div className="text-container">
        {date ? <h3>{title}</h3> : ""}
        <p>{description}</p>
        <Button>
          <Link scroll={false} href={`/angebot/${slug}`}>
            Weitere Infos
          </Link>
        </Button>
      </div>
    </CardWrapper>
  );
};

export default Card;
