import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SnsDetailCarousel = ({ imageSrc }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div>
        <Slider {...settings}>
          {imageSrc.map((item) => {
            return (
              <StCardImgBackground key={item.src}>
                <StCardImg alt="" src={item.src} />
              </StCardImgBackground>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SnsDetailCarousel;

const StCardImgBackground = styled.div`
  width: 343px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StCardImg = styled.img`
  width: 343px;
`;
