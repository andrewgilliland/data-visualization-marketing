import ArticleLayout from "@/components/layouts/ArticleLayout";
import Text from "@/components/Text";
import BarChart from "@/components/charts/BarChart";
import colors from "tailwindcss/colors";
import LineChart from "@/components/charts/LineChart";
import PieChart from "@/components/charts/PieChart";

export default function PageTen() {
  return (
    <ArticleLayout title="Why Use Data Visualizations?" page={10}>
      <div className="flex items-center gap-4 h-60">
        <BarChart
          data={[
            { x: "A", y: 2, fill: colors.blue[500] },
            { x: "B", y: 3, fill: colors.green[500] },
            { x: "C", y: 4, fill: colors.red[500] },
            { x: "D", y: 5, fill: colors.yellow[400] },
          ]}
        />
        <div>
          <h2 className="font-bold text-xl text-slate-900">
            Analyzing Patterns
          </h2>
          <Text className="mt-2">
            Data visualization is a representation of data and information
            through the use of graphics.
          </Text>
        </div>
      </div>
      <div className="flex items-center gap-4 h-60 mt-4">
        <div>
          <h2 className="font-bold text-xl text-slate-900">
            Breaking Down Complex Data
          </h2>
          <Text className="mt-2">
            Charts, graphs, plots, maps, infographics are all types of data
            visualizations.
          </Text>
        </div>
        <PieChart />
      </div>
      <div className="flex items-center gap-4 h-60 mt-4">
        <LineChart />
        <div>
          <h2 className="font-bold text-xl text-slate-900">
            Aid Creative Decisions
          </h2>
          <Text className="mt-2">
            These visual displays of data help communicate data relationships in
            a way that is easy to digest.
          </Text>
        </div>
      </div>
    </ArticleLayout>
  );
}
