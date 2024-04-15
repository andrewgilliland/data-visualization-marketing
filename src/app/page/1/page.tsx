import ArticleLayout from "@/components/layouts/ArticleLayout";
import Table from "@/components/Table";

export default function PageOne() {
  const data = [
    ["John Doe", "25", "USA"],
    ["Jane Doe", "22", "UK"],
    ["Sam Smith", "32", "Canada"],
  ];

  return (
    <ArticleLayout title="Pop Quiz" page={1}>
      <p className="font-medium text-lg text-slate-900 mt-8">
        Look at the table below. You have{" "}
        <span className="font-bold">five</span> seconds. Then click the
        &quot;Next&quot; button.
      </p>

      <div className="flex justify-center mt-16">
        <Table headings={["Name", "Age", "Country"]} data={data} />
      </div>
    </ArticleLayout>
  );
}
