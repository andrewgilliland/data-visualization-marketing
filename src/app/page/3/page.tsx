import ArticleLayout from "@/components/layouts/ArticleLayout";
import BarChart from "@/components/charts/BarChart";
import Text from "@/components/Text";
import colors from "tailwindcss/colors";

export default function PageThree() {
  return (
    <ArticleLayout title="Quiz 2" page={3}>
      <Text className="mt-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        obcaecati illum ad!
      </Text>

      <div className="h-96">
        <BarChart
          data={[
            { x: "Biff", y: 2, fill: colors.blue[500] },
            { x: "Tina", y: 3, fill: colors.green[500] },
            { x: "Egon", y: 5, fill: colors.red[500] },
            { x: "Whitney", y: 4, fill: colors.yellow[400] },
          ]}
        />
      </div>
    </ArticleLayout>
  );
}
