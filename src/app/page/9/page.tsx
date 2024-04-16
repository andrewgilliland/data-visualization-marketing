import ArticleLayout from "@/components/layouts/ArticleLayout";
import Text from "@/components/Text";
import BarChart from "@/components/charts/BarChart";
import colors from "tailwindcss/colors";

export default function PageNine() {
  return (
    <ArticleLayout title="What is Data Visualization?" page={9}>
      <div className="flex h-60">
        <BarChart
          data={[
            { x: "Biff", y: 2, fill: colors.blue[500] },
            { x: "Tina", y: 3, fill: colors.green[500] },
            { x: "Egon", y: 4, fill: colors.red[500] },
            { x: "Whitney", y: 5, fill: colors.yellow[400] },
          ]}
        />
        <BarChart />
        <BarChart />
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
