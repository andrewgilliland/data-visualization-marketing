"use client";
import { colorScale, theme } from "@/styles/theme";
import { FC } from "react";
import {
  VictoryAxis,
  VictoryChart,
  VictoryHistogram,
  VictoryLabel,
} from "victory";

type HistogramProps = {
  data?: { x: number }[];
};

const Histogram: FC<HistogramProps> = ({
  data = [
    { x: 1 },
    { x: 2 },
    { x: 2 },
    { x: 3 },
    { x: 3 },
    { x: 3 },
    { x: 4 },
    { x: 4 },
    { x: 4 },
    { x: 5 },
  ],
}) => {
  return (
    <VictoryChart theme={theme} domainPadding={10}>
      <VictoryAxis
        dependentAxis
        tickLabelComponent={<VictoryLabel dy={10} />}
        tickFormat={(tick: number) => `${Math.round(tick)}`}
      />
      <VictoryAxis tickLabelComponent={<VictoryLabel dx={-10} />} />
      <VictoryHistogram
        style={{
          data: {
            fill: ({ datum }) => {
              if (datum.x > 4) {
                return colorScale[0];
              } else if (datum.x > 3) {
                return colorScale[1];
              } else if (datum.x > 2) {
                return colorScale[2];
              } else {
                return colorScale[3];
              }
            },
          },
        }}
        horizontal
        animate={{
          onLoad: { duration: 500 },
        }}
        data={data}
      />
    </VictoryChart>
  );
};

export default Histogram;
