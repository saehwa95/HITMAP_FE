import React from "react";
import styled from "styled-components";
import WeatherDetailInfo from "../../elements/WeatherDetailInfo";
import WeatherDetailTitle from "./WeatherDetailTitle";
import TideGraph from "../../components/main/TideGraph";

const WeatherDetail = ({ weatherData }) => {

  return (
    <>
      <TableWrapper>
        <WeatherDetailTitle />
        <ScrollView>
          <WeatherDetailInfo weatherData={weatherData} />
          <TideGraph weatherData={weatherData} />
        </ScrollView>
      </TableWrapper>
    </>
  );
};

export default React.memo(WeatherDetail);

const TableWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const ScrollView = styled.div`
  display: flex;
  flex-direction: column;
  width: 311px;
  /* overflow-x: scroll; */
  /* ::-webkit-scrollbar {
    display: none;
  } */
`;
