"use client";
import { theme } from "@/styles/theme";
import { FC } from "react";
import { VictoryArea, VictoryAxis, VictoryChart, VictoryLabel } from "victory";

type AreaChartProps = {
  data?: { x: number; y: number; y0: number }[];
};

const AreaChart: FC<AreaChartProps> = ({
  data = [
    { x: 1, y: 2, y0: 0 },
    { x: 2, y: 3, y0: 0 },
    { x: 3, y: 5, y0: 0 },
    { x: 4, y: 4, y0: 0 },
    { x: 5, y: 6, y0: 0 },
  ],
}) => {
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
      <VictoryArea
        data={data}
        animate={{
          onLoad: { duration: 500 },
        }}
      />
    </VictoryChart>
  );
};

export default AreaChart;
