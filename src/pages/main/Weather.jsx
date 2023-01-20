import React from "react";
import PlaceName from "../../components/main/PlaceName";
import WeatherDetail from "../../components/main/WeatherDetail";
import { instance } from "../../redux/api/instance";
import { useQuery } from "@tanstack/react-query";

const Weather = () => {
  /* useQuery 적용 */
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

  return (
    <>
      <PlaceName placeName={placeName} />
      <WeatherDetail weatherData={weatherData} />
    </>
  );
};

export default React.memo(Weather);
