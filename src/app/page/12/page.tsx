import ArticleLayout from "@/components/layouts/ArticleLayout";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";
import PieChart from "@/components/charts/PieChart";
import Table from "@/components/Table";
import AreaChart from "@/components/charts/AreaChart";
import StackBarChart from "@/components/charts/StackedBarChart";
import ScatterPlot from "@/components/charts/ScatterPlot";
import Histogram from "@/components/charts/Histogram";
import Map from "@/components/Map";

export default function PageTwelve() {
  return (
    <ArticleLayout title="Types of Data Visualizations" page={12}>
      <div className="mt-4">
        <Text>
          The earliest forms of data visualization were largely used to assist
          in navigation, and can be traced back to pre-17th century in Egypt.
        </Text>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-6 mt-12">
        <div className="flex flex-col items-center">
          <Heading sectionLevel="h2">Table</Heading>
          <Table className="text-[8px] mt-8" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Heading sectionLevel="h2">Bar Chart</Heading>
          <BarChart />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Heading sectionLevel="h2">Pie Chart</Heading>
          <PieChart />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Heading sectionLevel="h2">Line Chart</Heading>
          <LineChart />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Heading sectionLevel="h2">Area Chart</Heading>
          <AreaChart />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Heading sectionLevel="h2">Stacked Bar Chart</Heading>
          <StackBarChart />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Heading sectionLevel="h2">Scatter Plot</Heading>
          <ScatterPlot />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Heading sectionLevel="h2">Histogram</Heading>
          <Histogram />
        </div>
        <div className="flex flex-col items-center">
          <Heading sectionLevel="h2">Map</Heading>
          <Map className="mt-8" />
        </div>
      </div>
    </ArticleLayout>
  );
}
