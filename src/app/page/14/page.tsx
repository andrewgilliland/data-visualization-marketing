import ArticleLayout from "@/components/layouts/ArticleLayout";
import Text from "@/components/Text";
import LineChart from "@/components/charts/LineChart";

export default function PageFourteen() {
  return (
    <ArticleLayout title="Line Charts" page={14}>
      <div className="h-64">
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
