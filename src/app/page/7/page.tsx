import ArticleLayout from "@/components/layouts/ArticleLayout";
import Text from "@/components/Text";
import LineChart from "@/components/charts/LineChart";
import Heading from "@/components/Heading";
import colors from "tailwindcss/colors";

export default function PageSeven() {
  return (
    <ArticleLayout title="Quiz 4" page={7}>
      <Text className="mt-8">5 seconds!!! Look at the chart!</Text>

      <div className="mt-8">
        <Heading sectionLevel="h2">Sales Q4</Heading>
        <div className="flex justify-between max-w-sm border-2 border-slate-900 rounded-lg p-4 mx-auto mt-4">
          {[
            { name: "Biff", backgroundColor: colors.blue[500] },
            { name: "Tina", backgroundColor: colors.green[500] },
            { name: "Egon", backgroundColor: colors.red[500] },
            { name: "Whitney", backgroundColor: colors.yellow[400] },
          ].map(({ name, backgroundColor }, index) => {
            return (
              <div className="flex items-center" key={index}>
                <div className="h-4 w-4 rounded" style={{ backgroundColor }} />
                <Text className="ml-2">{name}</Text>
              </div>
            );
          })}
        </div>
        <LineChart
          dataset={[
            {
              data: [
                { x: "October", y: 10000 },
                { x: "November", y: 9000 },
                { x: "December", y: 11000 },
              ],
              stroke: colors.blue[500],
            },
            {
              data: [
                { x: "October", y: 9000 },
                { x: "November", y: 10000 },
                { x: "December", y: 12000 },
              ],
              stroke: colors.green[500],
            },
            {
              data: [
                { x: "October", y: 8000 },
                { x: "November", y: 9000 },
                { x: "December", y: 9000 },
              ],
              stroke: colors.red[500],
            },
            {
              data: [
                { x: "October", y: 11000 },
                { x: "November", y: 12000 },
                { x: "December", y: 13000 },
              ],
              stroke: colors.yellow[400],
            },
          ]}
        />
      </div>
    </ArticleLayout>
  );
}
