import ArticleLayout from "@/components/layouts/ArticleLayout";
import Text from "@/components/Text";
import LineChart from "@/components/charts/LineChart";

export default function PageSeven() {
  return (
    <ArticleLayout title="Quiz 4" page={7}>
      <Text className="mt-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        obcaecati illum ad!
      </Text>

      <div className="h-96">
        <LineChart />
      </div>
    </ArticleLayout>
  );
}
