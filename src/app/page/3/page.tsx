import ArticleLayout from "@/components/layouts/ArticleLayout";
import BarChart from "@/components/charts/BarChart";
import Text from "@/components/Text";

export default function PageThree() {
  return (
    <ArticleLayout title="Quiz 2" page={3}>
      <Text className="mt-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        obcaecati illum ad!
      </Text>

      <div className="h-96">
        <BarChart />
      </div>
    </ArticleLayout>
  );
}
