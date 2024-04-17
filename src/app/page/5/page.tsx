import Heading from "@/components/Heading";
import ArticleLayout from "@/components/layouts/ArticleLayout";
import Table from "@/components/Table";
import Text from "@/components/Text";

export default function PageFive() {
  const headings = ["Name", "July", "August", "September"];

  const data = [
    ["Biff", 8000, 9000, 10000],
    ["Tina", 10000, 9000, 9500],
    ["Egon", 9000, 10000, 10000],
    ["Whitney", 9000, 10000, 11000],
  ];

  return (
    <ArticleLayout title="Quiz 3" page={5}>
      <Text className="mt-8">
        Look at the table below. You have{" "}
        <span className="font-bold">five</span> seconds. Then click the
        &quot;Next&quot; button.
      </Text>

      <div className="flex flex-col justify-center items-center mt-16">
        <Heading sectionLevel="h2">Sales Q3</Heading>
        <Table className="mt-8" headings={headings} data={data} />
      </div>
    </ArticleLayout>
  );
}
