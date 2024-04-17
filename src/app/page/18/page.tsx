import Heading from "@/components/Heading";
import ArticleLayout from "@/components/layouts/ArticleLayout";

export default function PageEighteen() {
  return (
    <ArticleLayout title="Questions, Comments, Concerns" page={18}>
      <div className="mt-12">
        <div className="mt-4">
          <Heading sectionLevel="h2">Bueller? Bueller? Bueller?</Heading>
        </div>
      </div>
    </ArticleLayout>
  );
}
