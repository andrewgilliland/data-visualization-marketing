import ArticleLayout from "@/components/layouts/ArticleLayout";
import Text from "@/components/Text";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";
import PieChart from "@/components/charts/PieChart";
import Heading from "@/components/Heading";

export default function PageTen() {
  return (
    <ArticleLayout title="Why Use Data Visualizations?" page={10}>
      <div className="flex items-center gap-4 h-60">
        <BarChart />
        <div>
          <Heading sectionLevel="h2">Analyzing Patterns</Heading>
          <Text className="mt-2">
            Data visualization is a representation of data and information
            through the use of graphics.
          </Text>
        </div>
      </div>
      <div className="flex items-center gap-4 h-60 mt-4">
        <div>
          <Heading sectionLevel="h2">Breaking Down Complex Data</Heading>
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
          <Heading sectionLevel="h2">Aid Creative Decisions</Heading>
          <Text className="mt-2">
            These visual displays of data help communicate data relationships in
            a way that is easy to digest.
          </Text>
        </div>
      </div>
      <div className="flex items-center gap-4 h-60 mt-4">
        <div>
          <Heading sectionLevel="h2">Data Driven Reports</Heading>
          <Text className="mt-2">
            Charts, graphs, plots, maps, infographics are all types of data
            visualizations.
          </Text>
        </div>
        <PieChart />
      </div>
    </ArticleLayout>
  );
}
