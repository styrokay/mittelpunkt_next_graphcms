import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import media from "styled-media-query";

const SliderWrapper = styled.div`
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
        min-height: ${(props) => props.height} !important;
        ${media.lessThan("medium")`
min-height: 300px !important;
`}
      }
    }
  }
`;

const ImageSlider = ({ children, height }) => {
  let settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <SliderWrapper height={height}>
      <Slider className="slider" {...settings}>
        {children}
      </Slider>
    </SliderWrapper>
  );
};

export default ImageSlider;
