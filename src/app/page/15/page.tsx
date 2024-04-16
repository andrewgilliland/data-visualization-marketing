import ArticleLayout from "@/components/layouts/ArticleLayout";
import Text from "@/components/Text";
import PieChart from "@/components/charts/PieChart";
import colors from "tailwindcss/colors";

export default function PageFifteen() {
  const data = [
    { x: "Adam Sandler on vacation", y: 1 },
    { x: "Adam Sandler everywhere else", y: 1 },
    { x: "Pro wrestling Fans", y: 31 },
    { x: "Photojournalists", y: 11 },
    { x: "Time travellers from 1999", y: 6 },
    { x: "Any guy yelling at his kids in public", y: 13 },
    { x: "Zookeepers", y: 7 },
    { x: "Anyone else named Todd", y: 13 },
    { x: "Guy your mom dated right after the divorce, also named Todd", y: 4 },
    { x: "Teenage drugdealers named Todd", y: 5 },
    { x: "Hollister mannequins", y: 8 },
  ];

  const colorScale = [
    colors.cyan[500],
    colors.emerald[500],
    colors.orange[500],
    colors.fuchsia[500],
    colors.pink[500],
    colors.blue[500],
    colors.green[500],
    colors.teal[500],
    colors.red[500],
    colors.purple[500],
    colors.yellow[400],
  ];

  return (
    <ArticleLayout title="Pie Charts" page={15}>
      <div className="flex flex-col h-96 mt-8">
        <h2 className="font-heading font-bold text-2xl text-blue-500">
          Who&apos;s still wearing{" "}
          <span className="text-orange-500">cargo shorts?</span>
        </h2>
        <PieChart
          data={data}
          defaultData={data}
          colorScale={colorScale}
          innerRadius={75}
          defaultInnerRadius={2}
          labelColor="transparent"
        />
      </div>
      <div className="mt-12">
        <Text>
          Data visualization is a representation of data and information through
          the use of graphics.
        </Text>
        <Text className="mt-2">
          Charts, graphs, plots, maps, infographics are all types of data
          visualizations.
        </Text>
      </div>
    </ArticleLayout>
  );
}
