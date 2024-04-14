"use client";
import { VictoryChart, VictoryBar, VictoryTheme } from "victory";

const BarChart = () => {
  const sampleData = [
    { x: "A", y: 2 },
    { x: "B", y: 3 },
    { x: "C", y: 5 },
    { x: "D", y: 4 },
  ];

  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
      <VictoryBar style={{ data: { fill: "#c43a31" } }} data={sampleData} />
    </VictoryChart>
  );
};

export default BarChart;
