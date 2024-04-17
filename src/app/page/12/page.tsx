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
import Map from "@/components/maps/Map";

export default function PageTwelve() {
  return (
    <ArticleLayout title="Types of Data Visualizations" page={12}>
      <div className="mt-8">
        <Text>
          The earliest forms of data visualization were largely used to assist
          in navigation, and can be traced back to pre-17th century in Egypt.
          The first known use of data visualization was in the form of a map,
          which was used to navigate the Nile River. Since then, data
          visualization has evolved to include a wide range of techniques and
          tools, each with its own unique strengths and weaknesses.
        </Text>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-6 mt-12">
        <div className="flex flex-col items-center">
          <Heading sectionLevel="h2">Tables</Heading>
          <Table className="text-[8px] mt-8" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Heading sectionLevel="h2">Bar Charts</Heading>
          <BarChart />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Heading sectionLevel="h2">Pie Charts</Heading>
          <PieChart />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Heading sectionLevel="h2">Line Charts</Heading>
          <LineChart />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Heading sectionLevel="h2">Area Charts</Heading>
          <AreaChart />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Heading sectionLevel="h2">Stacked Bar Charts</Heading>
          <StackBarChart />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Heading sectionLevel="h2">Scatter Plots</Heading>
          <ScatterPlot />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Heading sectionLevel="h2">Histograms</Heading>
          <Histogram />
        </div>
        <div className="flex flex-col items-center">
          <Heading sectionLevel="h2">Maps</Heading>
          <Map className="mt-8" />
        </div>
      </div>
    </ArticleLayout>
  );
}
