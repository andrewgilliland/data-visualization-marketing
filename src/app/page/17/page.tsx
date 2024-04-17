import Heading from "@/components/Heading";
import ArticleLayout from "@/components/layouts/ArticleLayout";
import Text from "@/components/Text";

export default function PageSeventeen() {
  return (
    <ArticleLayout title="Tools for Creating Data Visualizations" page={17}>
      <div className="mt-12">
        <div className="mt-4">
          <Heading sectionLevel="h2">Tableau</Heading>
          <Text>
            Tableau is most known for its wide range of data visualization
            capabilities. It allows users to create interactive and shareable
            dashboards.
          </Text>
        </div>
        <div className="mt-4">
          <Heading sectionLevel="h2">Microsoft Power BI</Heading>
          <Text>
            Microsoft Power BI is a business analytics tool that allows users to
            create interactive visualizations and reports.
          </Text>
        </div>
        <div className="mt-4">
          <Heading sectionLevel="h2">Looker Studio</Heading>
          <Text>
            Looker Studio is a free tool that allows users to create interactive
            dashboards and reports.
          </Text>
        </div>
        <div className="mt-4">
          <Heading sectionLevel="h2">Others?</Heading>
        </div>
      </div>
    </ArticleLayout>
  );
}
