import ArticleLayout from "@/components/layouts/ArticleLayout";
import Text from "@/components/Text";
import PieChart from "@/components/charts/PieChart";
import Histogram from "@/components/charts/Histogram";
import AreaChart from "@/components/charts/AreaChart";

export default function PageNine() {
  return (
    <ArticleLayout title="What is Data Visualization?" page={9}>
      <div className="flex h-60">
        <AreaChart />
        <PieChart />
        <Histogram />
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
