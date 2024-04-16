"use client";
import { theme } from "@/styles/theme";
import { FC } from "react";
import colors from "tailwindcss/colors";
import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLine,
  VictoryTheme,
} from "victory";

type LineChartProps = {
  data?: { x: number; y: number }[];
};

const LineChart: FC<LineChartProps> = () => {
  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 },
  ];

  const data2 = [
    { x: 1, y: 3 },
    { x: 2, y: 4 },
    { x: 3, y: 3 },
    { x: 4, y: 5 },
    { x: 5, y: 8 },
  ];

  return (
    <VictoryChart theme={theme}>
      <VictoryAxis
        dependentAxis
        tickLabelComponent={<VictoryLabel dx={-10} />}
        tickFormat={(tick: number) => `${Math.round(tick)}`}
      />
      <VictoryAxis
        tickLabelComponent={<VictoryLabel dy={10} />}
        tickFormat={(tick: number) => `${Math.round(tick)}`}
      />
      <VictoryLine
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        data={data}
      />
      <VictoryLine
        style={{ data: { stroke: colors.red[500] } }}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        data={data2}
      />
    </VictoryChart>
  );
};

export default LineChart;
