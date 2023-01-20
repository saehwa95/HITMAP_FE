import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import clickIcon from "../../../asset/icon/clickIcon.svg";

// const SampleNextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "gray" }}
//       onClick={onClick}
//     />
//   );
// };

// const SamplePrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <StArrow
//       className={className}
//       // src={clickIcon}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// };

const SnsDetailCarousel = ({ imageSrc }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
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
  /* height: 343px; */
`;

// const StArrow = styled.div`
//   width: 24px;
//   height: 24px;
// `;
