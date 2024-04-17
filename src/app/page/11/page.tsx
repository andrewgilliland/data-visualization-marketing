import ArticleLayout from "@/components/layouts/ArticleLayout";
import Text from "@/components/Text";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";
import Map from "@/components/maps/Map";

import Heading from "@/components/Heading";

export default function PageEleven() {
  return (
    <ArticleLayout title="Data Visualization Best Practices" page={11}>
      <div className="grid grid-cols-3 items-center h-60">
        <BarChart />
        <Map />
        <LineChart />
      </div>
      <div className="mt-4">
        <div className="mt-8">
          <Heading sectionLevel="h2">Know Your Audience</Heading>
          <Text>
            Understand who your audience is and what they are looking for. Make
            sure the data visualization is easy to understand for them.
          </Text>
        </div>
        <div className="mt-8">
          <Heading sectionLevel="h2">Choose The Right Visualization</Heading>
          <Text className="mt-2">
            Choose the right visualization for your data. Make sure it is
            appropriate for the data you are trying to represent.
          </Text>
        </div>
        <div className="mt-8">
          <Heading sectionLevel="h2">Keep It Simple</Heading>
          <Text className="mt-2">
            Keep the data visualization simple and easy to understand. Avoid too
            many colors, labels, and data points.
          </Text>
        </div>
      </div>
    </ArticleLayout>
  );
}
