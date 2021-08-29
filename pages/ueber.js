import React from "react";
import Image from "next/image";
import { getAboutData } from "../lib/data";
import styled from "styled-components";
import { RichText } from "@graphcms/rich-text-react-renderer";
const ImageWrapper = styled.div`
  position: relative;
  height: 800px;
  width: 400px;
`;

const Ueber = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Infos über Mittelpunkt</h1>

      {data.teams.map((e, index) => {
        return (
          <div key={index}>
            <h4>{e.name}</h4>
            <p>{e.jobtitle}</p>
            {e.image ? (
              <ImageWrapper>
                <Image layout="fill" objectFit="cover" src={e.image.url} />
              </ImageWrapper>
            ) : null}
            {e.description ? <RichText content={e.description.raw} /> : null}
          </div>
        );
      })}

      {data.abouts[0].description.map((e, index) => {
        return (
          <div key={index}>
            <RichText content={e.raw} />
          </div>
        );
      })}
    </div>
  );
};

export default Ueber;

export const getStaticProps = async () => {
  const data = await getAboutData();
  return {
    props: {
      data,
    },
  };
};
