import ArticleLayout from "@/components/layouts/ArticleLayout";
import Text from "@/components/Text";
import BarChart from "@/components/charts/BarChart";
import colors from "tailwindcss/colors";
import LineChart from "@/components/charts/LineChart";
import PieChart from "@/components/charts/PieChart";

export default function PageEleven() {
  return (
    <ArticleLayout title="Data Visualization Best Practices" page={11}>
      <div className="flex h-60">
        <BarChart
          data={[
            { x: "A", y: 2, fill: colors.blue[500] },
            { x: "B", y: 3, fill: colors.green[500] },
            { x: "C", y: 4, fill: colors.red[500] },
            { x: "D", y: 5, fill: colors.yellow[400] },
          ]}
        />
        <PieChart />
        <LineChart />
      </div>
      <div className="mt-4">
        <Text>
          Data visualization is a representation of data and information through
          the use of graphics.
        </Text>
        <Text className="mt-2">
          Charts, graphs, plots, maps, infographics are all types of data
          visualizations.
        </Text>
        <Text className="mt-2">
          These visual displays of data help communicate data relationships in a
          way that is easy to digest.
        </Text>
      </div>
    </ArticleLayout>
  );
}
