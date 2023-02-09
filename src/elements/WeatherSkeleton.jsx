import React from "react";
import styled from "styled-components";

const WeatherSkeleton = () => {
  return (
    <SkeletonWrapper>
      <div className="skeleton" />
    </SkeletonWrapper>
  );
};

export default WeatherSkeleton;

const SkeletonWrapper = styled.div`
  width: 311px;
  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    50%,
    100% {
      transform: translateX(311px);
    }
  }
  .skeleton {
    height: 688px;
    background-color: #ebebeb;
    overflow: hidden;
    position: relative;
  }

  .skeleton::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 688px;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: loading 2s infinite linear;
  }
`;
