import React from "react";
// import ApexCharts from "apexcharts";

const TideGraph = ({ weatherInfo }) => {
  const weatherData = weatherInfo?.data?.data;

  return (
    <>
      {/* <ApexCharts /> */}
      <div>{weatherData?.tide_info[0].tph_level}</div>
    </>
  );
};

export default TideGraph;
