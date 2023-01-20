import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, YAxis } from "recharts";

const TideGraph = ({ weatherData }) => {
  const tideInfo = weatherData?.tide_info;

  return (
    <TideInfoWrapper>
      <AreaChart width={1088} height={369} data={tideInfo}>
        <YAxis domain={[0, "dataMax + 700"]} hide="true" />
        <Tooltip />
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#006981" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#006981" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          className="chart"
          type="monotone"
          dataKey="해수면 높이(cm)"
          stroke="#006981"
          fill="url(#colorPv)"
        />
      </AreaChart>
    </TideInfoWrapper>
  );
};

export default React.memo(TideGraph);

const TideInfoWrapper = styled.div`
  width: 1088px;
  background-color: #f6f6f6;
`;
