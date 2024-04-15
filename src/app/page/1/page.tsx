import ArticleLayout from "@/components/layouts/ArticleLayout";
import Table from "@/components/Table";
import Text from "@/components/Text";

export default function PageOne() {
  const headings = ["Name", "Age", "Country"];

  const data = [
    ["John Doe", "25", "USA"],
    ["Jane Doe", "22", "UK"],
    ["Sam Smith", "32", "Canada"],
  ];

  return (
    <ArticleLayout title="Pop Quiz" page={1}>
      <Text className="mt-8">
        Look at the table below. You can only look for{" "}
        <span className="font-bold">five</span> seconds!!! Then click the
        &quot;Next&quot; button.
      </Text>

      <div className="flex justify-center mt-16">
        <Table headings={headings} data={data} />
      </div>
    </ArticleLayout>
  );
}
