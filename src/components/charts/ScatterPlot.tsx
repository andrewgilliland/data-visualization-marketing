"use client";
import { theme } from "@/styles/theme";
import { FC } from "react";
import colors from "tailwindcss/colors";
import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryScatter,
} from "victory";

type ScatterPlotProps = {
  data?: { x: number; y: number; fill: string }[];
};

const ScatterPlot: FC<ScatterPlotProps> = ({
  data = [
    { x: 1, y: 2, fill: colors.blue[500] },
    { x: 2, y: 3, fill: colors.green[500] },
    { x: 3, y: 5, fill: colors.red[500] },
    { x: 4, y: 4, fill: colors.yellow[400] },
  ],
}) => {
  return (
    <VictoryChart theme={theme} domain={{ x: [0, 4.5], y: [0, 5.5] }}>
      <VictoryAxis
        dependentAxis
        tickLabelComponent={<VictoryLabel dx={-10} />}
        tickFormat={(tick: number) => `${Math.round(tick)}`}
      />
      <VictoryAxis
        tickLabelComponent={<VictoryLabel dy={10} />}
        tickFormat={(tick: number) => `${Math.round(tick)}`}
      />
      <VictoryScatter
        style={{
          data: {
            fill: ({ datum }) => datum.fill,
            opacity: ({ datum }) => datum.opacity,
          },
        }}
        size={10}
        data={data}
        animate={{
          onLoad: {
            duration: 1000,
            before: () => ({ opacity: 0 }),
            after: () => ({ opacity: 1 }),
          },
        }}
      />
    </VictoryChart>
  );
};

export default ScatterPlot;
