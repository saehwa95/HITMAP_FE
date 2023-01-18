import React from "react";
import { AreaChart, Area, Tooltip, YAxis } from "recharts";
import styled from "styled-components";

const TideGraph = ({ weatherData }) => {
  const tideInfo = weatherData?.tide_info;
  return (
    <ChartWrapper>
      <AreaChart width={1105} height={384} data={tideInfo}>
        <YAxis domain={[0, "dataMax + 700"]} hide="true" />
        <Tooltip />
        <Area
          className="chart"
          type="monotone"
          dataKey="tph_level"
          stroke="#006981"
          fill="#006981"
        />
      </AreaChart>
    </ChartWrapper>
  );
};

export default React.memo(TideGraph);

const ChartWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: absolute;
  bottom: 22px;
  height: 384px;
  background-color: #f6f6f6;
`;
