import ArticleLayout from "@/components/layouts/ArticleLayout";
import BarChart from "@/components/charts/BarChart";

export default function PageThree() {
  return (
    <ArticleLayout title="Quiz 2" page={3}>
      <p className="font-medium text-lg text-slate-900 mt-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        obcaecati illum ad!
      </p>

      <div className="h-96">
        <BarChart />
      </div>
    </ArticleLayout>
  );
}
