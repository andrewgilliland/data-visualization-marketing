import ArticleLayout from "@/components/layouts/ArticleLayout";
import Table from "@/components/Table";
import Text from "@/components/Text";

export default function PageFive() {
  const headings = ["Name", "Age", "Country"];

  const data = [
    ["John Doe", "25", "USA"],
    ["Jane Doe", "22", "UK"],
    ["Sam Smith", "32", "Canada"],
    ["Alice Smith", "28", "Australia"],
    ["Bob Smith", "30", "New Zealand"],
    ["Charlie Smith", "29", "South Africa"],
  ];

  return (
    <ArticleLayout title="Quiz" page={5}>
      <Text className="mt-8">
        Look at the table below. You have{" "}
        <span className="font-bold">five</span> seconds. Then click the
        &quot;Next&quot; button.
      </Text>

      <div className="flex justify-center mt-16">
        <Table headings={headings} data={data} />
      </div>
    </ArticleLayout>
  );
}
