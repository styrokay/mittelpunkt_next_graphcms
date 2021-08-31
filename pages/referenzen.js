import React from "react";
import { getReferenceList } from "../lib/data";
import { RichText } from "@graphcms/rich-text-react-renderer";
import styled from "styled-components";
import Container from "../components/Container";

const ReferenceWrapper = styled.div`
  min-height: 100vh;

  .reference-post {
    font-weight: 21px;
    font-weight: 300;
    margin: 30px 0;
    position: relative;

    ::after {
      position: absolute;
      height: 100%;
      width: 5px;
      background: ${({ theme }) => theme.colors.primary};
      content: "";
      z-index: -1;
      top: 0;
      left: -20px;
    }
  }
`;

const Referenzen = ({ data }) => {
  console.log(data);
  return (
    <ReferenceWrapper>
      <Container>
        <h1>Referenzen</h1>
        <Container maxwidth="700px">
          {data.references.map((e, index) => {
            return (
              <div key={index} className="reference-post">
                <RichText content={e.description.json} />
              </div>
            );
          })}
        </Container>
      </Container>
    </ReferenceWrapper>
  );
};

export default Referenzen;

export const getStaticProps = async () => {
  const data = await getReferenceList();
  return {
    props: {
      data,
    },
  };
};
