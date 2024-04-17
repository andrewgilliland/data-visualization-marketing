import ArticleLayout from "@/components/layouts/ArticleLayout";
import Text from "@/components/Text";
import LineChart from "@/components/charts/LineChart";

export default function PageFourteen() {
  return (
    <ArticleLayout title="Line Charts" page={14}>
      <div className="h-64">
        <LineChart />
      </div>
      <div className="mt-8">
        <Text className="">
          Line charts are graphical representations that illustrate trends and
          patterns in numerical data.
        </Text>
        <Text className="mt-4">
          Line charts are useful ifor portraying continuous data over a specific
          period.
        </Text>
        <Text className="mt-4">
          They are also useful for showing relationships between two variables.
        </Text>
      </div>
    </ArticleLayout>
  );
}
