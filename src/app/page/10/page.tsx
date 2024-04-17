import ArticleLayout from "@/components/layouts/ArticleLayout";
import Text from "@/components/Text";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";
import PieChart from "@/components/charts/PieChart";
import Heading from "@/components/Heading";
import StackBarChart from "@/components/charts/StackedBarChart";

import ScatterPlot from "@/components/charts/ScatterPlot";

export default function PageTen() {
  return (
    <ArticleLayout title="Why Use Data Visualizations?" page={10}>
      <div className="flex items-center gap-4 mt-8">
        <StackBarChart />
        <div className="w-2/3">
          <Heading sectionLevel="h2">Analyzing Patterns</Heading>
          <Text className="mt-2">
            Data visualization is great for revealing patterns in large
            datasets. You can quickly spot relationships and trends they
            otherwise couldn&apos;t, allowing you to identify areas of
            opportunity.
          </Text>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-8">
        <div className="w-2/3">
          <Heading sectionLevel="h2">Breaking Down Complex Data</Heading>
          <Text className="mt-2">
            Data visualization can help quickly sift through that information to
            find the most meaningful relationships and trends. Those trends
            could include current stock levels, seasonal trends, and changing
            consumer behavior.
          </Text>
        </div>
        <ScatterPlot />
      </div>
      <div className="flex items-center gap-4 mt-8">
        <LineChart />
        <div className="w-2/3">
          <Heading sectionLevel="h2">Aid Creative Decisions</Heading>
          <Text className="mt-2">
            Data visualization helps you make inform creative decisions by
            giving them a better view of who your customers are and what they
            want.
          </Text>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-8">
        <div className="w-2/3">
          <Heading sectionLevel="h2">Data Driven Reports</Heading>
          <Text className="mt-2">
            Data visualizations can help you gain better insights into customer
            behavior, market trends, and other valuable data points. They can
            easily be shown to teams in presentations, regular reports, or
            real-time dashboards.
          </Text>
        </div>
        <PieChart />
      </div>
    </ArticleLayout>
  );
}
