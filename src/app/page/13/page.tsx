import ArticleLayout from "@/components/layouts/ArticleLayout";
import Text from "@/components/Text";
import BarChart from "@/components/charts/BarChart";

export default function PageThirteen() {
  return (
    <ArticleLayout title="Bar Charts" page={13}>
      <div className="h-64">
        <BarChart />
      </div>
      <div className="mt-8">
        <Text>A bar graph shows comparisons among discrete categories.</Text>
        <Text className="mt-4">
          A bar chart is a chart with rectangular bars with lengths proportional
          to the values that they represent. The bars can be plotted vertically
          or horizontally.
        </Text>
        <Text className="mt-4">
          Bar charts provide a visual presentation of categorical data.
          Categorical data is a grouping of data into discrete groups, such as
          months of the year, age group, shoe sizes, and animals
        </Text>
      </div>
    </ArticleLayout>
  );
}
