import React from "react";
import styled from "styled-components";
import WeatherDetailInfo from "../../elements/WeatherDetailInfo";
import WeatherDetailTitle from "./WeatherDetailTitle";
import TideGraph from "../../components/main/TideGraph";
import WeatherSkeleton from "../../elements/WeatherSkeleton";

const WeatherDetail = ({ weatherData, Loding }) => {
  return (
    <>
      <TableWrapper>
        <WeatherDetailTitle />
        {Loding === true ? (
          <WeatherSkeleton />
        ) : (
          <ScrollView>
            <WeatherDetailInfo weatherData={weatherData} />
            <TideGraph weatherData={weatherData} />
          </ScrollView>
        )}
      </TableWrapper>
    </>
  );
};

export default React.memo(WeatherDetail);

const TableWrapper = styled.div`
  display: flex;
  background-color: #f6f6f6;
`;

const ScrollView = styled.div`
  display: flex;
  flex-direction: column;
  width: 311px;
  overflow-x: scroll;
`;
