"use client";
import { theme } from "@/styles/theme";
import { FC } from "react";
import colors from "tailwindcss/colors";
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
} from "victory";

type BarChartProps = {
  data?: { x: string; y: number; fill: string }[];
};

const BarChart: FC<BarChartProps> = ({
  data = [
    { x: "A", y: 2, fill: colors.blue[500] },
    { x: "B", y: 3, fill: colors.green[500] },
    { x: "C", y: 4, fill: colors.red[500] },
    { x: "D", y: 5, fill: colors.yellow[400] },
  ],
}) => {
  // console.log("victorytheme: ", VictoryTheme.material);

  return (
    <VictoryChart theme={theme} domainPadding={30}>
      <VictoryAxis
        dependentAxis
        tickLabelComponent={<VictoryLabel dx={-10} />}
        tickFormat={(tick: number) => `${Math.round(tick)}`}
      />
      <VictoryAxis tickLabelComponent={<VictoryLabel dy={10} />} />
      <VictoryBar
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        style={{
          data: {
            fill: ({ datum }) => datum.fill,
          },
        }}
        data={data}
      />
    </VictoryChart>
  );
};

export default BarChart;
