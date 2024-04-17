import ArticleLayout from "@/components/layouts/ArticleLayout";
import BarChart from "@/components/charts/BarChart";
import Text from "@/components/Text";
import colors from "tailwindcss/colors";
import Heading from "@/components/Heading";

export default function PageThree() {
  return (
    <ArticleLayout title="Quiz 2" page={3}>
      <Text className="mt-8">
        You know the drill, look at the chart below for{" "}
        <span className="font-bold">five</span> seconds and then click the
        &quot;Next&quot; button.
      </Text>

      <div className="mt-8">
        <Heading sectionLevel="h2">Sales Q2</Heading>
        <BarChart
          horizontalGridStrokeColor={colors.slate[400]}
          data={[
            { x: "Biff", y: 25000, fill: colors.blue[500] },
            { x: "Tina", y: 26000, fill: colors.green[500] },
            { x: "Egon", y: 21000, fill: colors.red[500] },
            { x: "Whitney", y: 29000, fill: colors.yellow[400] },
          ]}
        />
      </div>
    </ArticleLayout>
  );
}
