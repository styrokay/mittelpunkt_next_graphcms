import React from "react";
import styled from "styled-components";
const ContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: ${(props) => (props.maxwidth ? props.maxwidth : "1000px")};
`;

const Container = ({ children, ...props }) => {
  return (
    <ContainerWrapper maxwidth={props.maxwidth}>{children}</ContainerWrapper>
  );
};

export default Container;
