import colors from "tailwindcss/colors";
import { VictoryThemeDefinition } from "victory";

export const theme: VictoryThemeDefinition = {
  axis: {
    style: {
      tickLabels: {
        fill: colors.slate[900],
      },
      axis: {
        stroke: colors.slate[900],
        strokeWidth: 1.5,
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
        stroke: colors.slate[900],
        strokeWidth: 1.5,
      },
    },
  },
  line: {
    style: {
      data: {
        stroke: colors.blue[500],
        strokeWidth: 3,
      },
    },
  },
};
