import React from "react";

const SnsDetailCarousel = ({ imageSrc }) => {
  console.log(imageSrc[1].src);
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={imageSrc[0].src} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={imageSrc[1].src} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={imageSrc[2].src} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default SnsDetailCarousel;
