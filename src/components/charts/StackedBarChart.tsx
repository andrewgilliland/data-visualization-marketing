"use client";
import { colorScale, theme } from "@/styles/theme";
import { FC } from "react";
import { VictoryAxis, VictoryBar, VictoryLabel, VictoryStack } from "victory";

type StackBarChartProps = {
  dataset?: { x: string; y: number }[][];
};

const StackBarChart: FC<StackBarChartProps> = ({
  dataset = [
    [
      { x: "A", y: 2 },
      { x: "B", y: 3 },
      { x: "C", y: 5 },
    ],
    [
      { x: "A", y: 1 },
      { x: "B", y: 4 },
      { x: "C", y: 5 },
    ],
    [
      { x: "A", y: 3 },
      { x: "B", y: 2 },
      { x: "C", y: 6 },
    ],
    [
      { x: "A", y: 4 },
      { x: "B", y: 3 },
      { x: "C", y: 7 },
    ],
  ],
}) => {
  return (
    <VictoryStack theme={theme}>
      {/* <VictoryAxis
        dependentAxis
        tickLabelComponent={<VictoryLabel dx={-10} />}
        tickFormat={(tick: number) => `${Math.round(tick)}`}
      />
      <VictoryAxis
        tickLabelComponent={<VictoryLabel dy={10} />}
        tickFormat={(tick: number) => `${Math.round(tick)}`}
      /> */}
      {dataset.map((data, index) => {
        return (
          <VictoryBar
            key={index}
            data={data}
            animate={{
              onLoad: { duration: 500 },
            }}
          />
        );
      })}
    </VictoryStack>
  );
};

export default StackBarChart;
