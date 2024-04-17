import Heading from "@/components/Heading";
import ArticleLayout from "@/components/layouts/ArticleLayout";
import Table from "@/components/Table";
import Text from "@/components/Text";

export default function PageOne() {
  const headings = ["Name", "Sales"];

  const data = [
    ["Biff", 14000],
    ["Tina", 32000],
    ["Egon", 28000],
    ["Whitney", 24000],
  ];

  return (
    <ArticleLayout title="Pop Quiz" page={1}>
      <Text className="mt-8">
        Look at the table below. You can only look for{" "}
        <span className="font-bold">five</span> seconds!!! Then click the
        &quot;Next&quot; button.
      </Text>

      <div className="flex flex-col justify-center items-center mt-16">
        <Heading sectionLevel="h2">Sales Q1</Heading>
        <Table className="mt-4" headings={headings} data={data} />
      </div>
    </ArticleLayout>
  );
}
