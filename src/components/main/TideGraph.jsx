import React from "react";
// import ApexCharts from "apexcharts";

const TideGraph = ({ weatherData }) => {
  return (
    <>
      {/* <ApexCharts /> */}
      <div>{weatherData?.tide_info[0].tph_level}</div>
    </>
  );
};

export default React.memo(TideGraph);
