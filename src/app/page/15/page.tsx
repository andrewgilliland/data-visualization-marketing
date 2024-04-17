import ArticleLayout from "@/components/layouts/ArticleLayout";
import Text from "@/components/Text";
import PieChart from "@/components/charts/PieChart";
import colors from "tailwindcss/colors";

export default function PageFifteen() {
  const data = [
    { x: "Adam Sandler on vacation", y: 1 },
    { x: "Adam Sandler everywhere else", y: 1 },
    { x: "Pro wrestling fans", y: 31 },
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
    colors.emerald[600],
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
      <div className="flex flex-col h-96 mt-12">
        <h2 className="font-heading font-bold text-2xl text-blue-500">
          Who&apos;s still wearing{" "}
          <span className="text-orange-500">cargo shorts?</span>
        </h2>
        <div className="flex">
          <div className="w-1/2">
            <div className="border-2 border-slate-900 rounded-lg mt-4 px-4 py-2">
              {data.map(({ x, y }, index) => (
                <div key={index} className="p-1">
                  <div
                    style={{ backgroundColor: colorScale[index] }}
                    className="inline-flex justify-center items-center border border-slate-900 h-9 w-9 rounded-full"
                  >
                    <div className="text-slate-900 text-sm">{`${y}%`}</div>
                  </div>
                  <div className="inline font-medium text-slate-900 text-sm ml-2">
                    {x}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2">
            <PieChart
              data={data}
              defaultData={data}
              colorScale={colorScale}
              innerRadius={75}
              defaultInnerRadius={2}
              labelColor="transparent"
            />
          </div>
        </div>
      </div>
      <div className="mt-56">
        <Text>
          A pie chart is a circular statistical graphic, which is divided into
          slices to illustrate numerical proportion.
        </Text>
        <Text className="mt-4">
          Pie charts can be used to show percentages of a whole, and represents
          percentages at a set point in time.
        </Text>
        <Text className="mt-4">
          Pie charts are also useful for showing the proportion of different
          categories in a dataset.
        </Text>
      </div>
    </ArticleLayout>
  );
}
