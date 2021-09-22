import React from "react";
import Image from "next/image";
import { getAboutData } from "../lib/data";
import styled from "styled-components";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Container from "../components/Container";

const AboutWrapper = styled.div`
  .name {
    font-weight: 500;
    font-size: 40px;
    margin: 10px 0;
  }
  .jobtitle {
    font-size: 30px;
    margin: 0;
  }

  .space {
    margin-bottom: 200px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 800px;
  margin: 50px 0;
`;

const Ueber = ({ data }) => {
  return (
    <AboutWrapper>
      <Container maxwidth="700px">
        <h1>Über mittelpunkt</h1>
      </Container>

      {data.abouts[0].description.map((e, index) => {
        return (
          <Container key={index} maxwidth="700px">
            <div className="text-container">
              <RichText content={e.raw} />
            </div>
          </Container>
        );
      })}
    </AboutWrapper>
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
