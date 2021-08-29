import React from "react";
import { getServiceList } from "../lib/data";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const ImageWrapper = styled.div`
  position: relative;
  height: 800px;
  width: 400px;
`;

const Angebot = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Angebote</h1>

      {data.services.map((e, index) => {
        return (
          <div key={index}>
            <h4>{e.title}</h4>
            <ImageWrapper>
              <Image layout="fill" objectFit="cover" src={e.images[0].url} />
            </ImageWrapper>

            <div>{e.description}</div>
            <Link href={`/angebot/${e.slug}`}>Details zum Angebot</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Angebot;

export const getStaticProps = async () => {
  const data = await getServiceList();
  return {
    props: {
      data,
    },
  };
};
