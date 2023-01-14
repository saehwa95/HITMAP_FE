import React from "react";
import axios from "axios";

const WeatherDetail = () => {
  console.log(
    "위도 : ",
    new URLSearchParams(window.location.search).get("lat"),
    "경도 : ",
    new URLSearchParams(window.location.search).get("lon")
  );
  const req = axios.get(
    `http://koyunhyeok.shop/weather?lat=${new URLSearchParams(
      window.location.search
    ).get("lat")}&lon=${new URLSearchParams(window.location.search).get("lon")}`
  );
  req.then(function (response) {
    console.log(response);
  });

  return <div>WeatherDetail</div>;
};

export default WeatherDetail;
