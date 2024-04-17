"use client";
import { theme } from "@/styles/theme";
import { FC } from "react";
import colors from "tailwindcss/colors";
import { VictoryAxis, VictoryChart, VictoryLabel, VictoryLine } from "victory";

type LineChartProps = {
  dataset?: {
    data: { x: number | string; y: number | string }[];
    stroke: string;
  }[];
  domain?: [number, number];
};

const LineChart: FC<LineChartProps> = ({
  dataset = [
    {
      data: [
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 5 },
        { x: 4, y: 4 },
        { x: 5, y: 7 },
      ],
      stroke: colors.blue[500],
    },
    {
      data: [
        { x: 1, y: 3 },
        { x: 2, y: 4 },
        { x: 3, y: 3 },
        { x: 4, y: 5 },
        { x: 5, y: 8 },
      ],
      stroke: colors.red[500],
    },
    {
      data: [
        { x: 1, y: 4 },
        { x: 2, y: 5 },
        { x: 3, y: 6 },
        { x: 4, y: 5 },
        { x: 5, y: 6 },
      ],
      stroke: colors.green[500],
    },
    {
      data: [
        { x: 1, y: 2 },
        { x: 2, y: 6 },
        { x: 3, y: 7 },
        { x: 4, y: 3 },
        { x: 5, y: 5 },
      ],
      stroke: colors.yellow[400],
    },
  ],
  domain,
}) => {
  return (
    <VictoryChart theme={theme} domain={domain}>
      <VictoryAxis
        dependentAxis
        tickLabelComponent={<VictoryLabel dx={-10} />}
        tickFormat={(tick: number) => `${Math.round(tick)}`}
      />
      <VictoryAxis
        tickLabelComponent={<VictoryLabel dy={10} />}
        // tickFormat={(tick: number) => `${Math.round(tick)}`}
      />
      {dataset.map(({ data, stroke }, index) => (
        <VictoryLine
          key={index}
          style={{ data: { stroke } }}
          animate={{
            onLoad: { duration: 500 },
          }}
          data={data}
        />
      ))}
    </VictoryChart>
  );
};

export default LineChart;
