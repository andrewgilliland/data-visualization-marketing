"use client";
import { useEffect, useState } from "react";
import colors from "tailwindcss/colors";
import { VictoryPie } from "victory";

const PieChart = () => {
  const defaultGraphicData = [
    { x: "A", y: 5 },
    { x: "B", y: 5 },
    { x: "C", y: 5 },
    { x: "D", y: 85 },
  ];

  const data = [
    { x: "A", y: 35 },
    { x: "B", y: 40 },
    { x: "C", y: 55 },
    { x: "D", y: 60 },
  ];
  const [graphicData, setGraphicData] = useState(defaultGraphicData);

  useEffect(() => {
    setGraphicData(data); // Setting the data that we want to display
  }, []);

  return (
    <VictoryPie
      colorScale={[
        colors.blue[500],
        colors.green[500],
        colors.red[500],
        colors.yellow[400],
      ]}
      animate={{
        // easing: "exp",
        duration: 2000,
        // onLoad: { duration: 1000 },
      }}
      data={graphicData}
    />
  );
};

export default PieChart;
