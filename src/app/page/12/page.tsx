import ArticleLayout from "@/components/layouts/ArticleLayout";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";
import PieChart from "@/components/charts/PieChart";

export default function PageTwelve() {
  return (
    <ArticleLayout title="Types of Data Visualizations" page={12}>
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
      <div className="border grid grid-cols-3 gap-4">
        <div>
          <Heading sectionLevel="h2">Bar Chart</Heading>
          <BarChart />
        </div>
        <div>
          <Heading sectionLevel="h2">Pie Chart</Heading>
          <PieChart />
        </div>
        <div>
          <Heading sectionLevel="h2">Line Chart</Heading>
          <LineChart />
        </div>
      </div>
    </ArticleLayout>
  );
}
