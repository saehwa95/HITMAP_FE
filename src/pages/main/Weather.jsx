import React from "react";
import { useQuery } from "@tanstack/react-query";
import { instance } from "../../redux/api/instance";
import PlaceName from "../../components/main/PlaceName";
import WeatherDetail from "../../components/main/WeatherDetail";

const Weather = () => {
  const WeatherfetchAPI = async () => {
    const WeatherData = await instance.get(
      `/weather?lat=${new URLSearchParams(window.location.search).get(
        "lat"
      )}&lon=${new URLSearchParams(window.location.search).get(
        "lon"
      )}&place_name=${new URLSearchParams(window.location.search).get(
        "place_name"
      )}
        `
    );
    return WeatherData;
  };

  const weatherInfo = useQuery(["weatherdata"], WeatherfetchAPI);
  const placeName = weatherInfo?.data?.data.place_name;
  const weatherData = weatherInfo?.data?.data;
  const Loding = weatherInfo.isLoading;
  return (
    <>
      <PlaceName placeName={placeName} />
      <WeatherDetail weatherData={weatherData} Loding={Loding} />
    </>
  );
};

export default React.memo(Weather);
