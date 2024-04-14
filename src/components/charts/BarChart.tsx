"use client";
import colors from "tailwindcss/colors";
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryThemeDefinition,
  VictoryAxis,
  VictoryLabel,
} from "victory";

const BarChart = () => {
  const data = [
    { x: "Biff", y: 2, fill: colors.blue[500] },
    { x: "Tina", y: 3, fill: colors.green[500] },
    { x: "Egon", y: 5, fill: colors.red[500] },
    { x: "Whitney", y: 4, fill: colors.yellow[400] },
  ];

  console.log("victorytheme: ", VictoryTheme.material);

  const theme: VictoryThemeDefinition = {
    axis: {
      style: {
        tickLabels: {
          fill: colors.slate[900],
        },

        axis: {
          stroke: colors.slate[900],
        },
        grid: {
          stroke: "transparent",
        },
      },
    },
    bar: {
      style: {
        data: {
          fill: colors.blue[500],
          width: 40,
        },
      },
    },
  };

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
