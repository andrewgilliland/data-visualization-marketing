"use client";
import { FC, useEffect, useState } from "react";
import colors from "tailwindcss/colors";
import {
  VictoryContainer,
  VictoryLabel,
  VictoryLegend,
  VictoryPie,
} from "victory";

type PieChartProps = {
  data?: { x: string; y: number }[];
  defaultData?: { x: string; y: number }[];
  colorScale?: string[];
  innerRadius?: number;
  defaultInnerRadius?: number;
  labelColor?: string;
};

const PieChart: FC<PieChartProps> = ({
  data = [
    { x: "A", y: 35 },
    { x: "B", y: 40 },
    { x: "C", y: 55 },
    { x: "D", y: 60 },
  ],
  defaultData = [
    { x: "A", y: 5 },
    { x: "B", y: 10 },
    { x: "C", y: 15 },
    { x: "D", y: 70 },
  ],
  colorScale = [
    colors.blue[500],
    colors.green[500],
    colors.red[500],
    colors.yellow[400],
  ],
  innerRadius = 0,
  defaultInnerRadius = 0,
  labelColor = colors.slate[900],
}) => {
  const [graphicData, setGraphicData] = useState(defaultData);
  const [graphicInnerRadius, setGraphicInnerRadius] =
    useState(defaultInnerRadius);

  useEffect(() => {
    console.log("useEffect");
    setGraphicData(data); // Setting the data that we want to display
    setGraphicInnerRadius(innerRadius); // Setting the inner radius of the pie chart
  }, []);

  return (
    <VictoryPie
      innerRadius={graphicInnerRadius}
      colorScale={colorScale}
      animate={{
        duration: 2000,
      }}
      style={{
        data: {
          stroke: colors.slate[900],
          strokeWidth: 1.5,
        },
      }}
      data={graphicData}
      labelComponent={
        <VictoryLabel
          style={{
            fill: labelColor,
            fontSize: 12,
          }}
        />
      }
    />
  );
};

export default PieChart;
