import ArticleLayout from "@/components/layouts/ArticleLayout";
import Question from "@/components/Question";

export default function PageFour() {
  return (
    <ArticleLayout title="Questions" page={4}>
      <p className="font-medium text-slate-900 text-sm mt-1">
        (Hover questions for answers)
      </p>

      <div className="mt-8">
        <Question
          question="1. Dignissimos, sequi, incidunt repellat, vero a mollitia provident porro ea necessitatibus culpa animi cum excepturi consequatur reiciendis nam?"
          answer="True"
        />
        <Question
          className="mt-4"
          question="2. Dignissimos, sequi, incidunt repellat, vero a mollitia provident porro ea necessitatibus culpa animi cum excepturi consequatur reiciendis nam?"
          answer="True"
        />
        <Question
          className="mt-4"
          question="3. Dignissimos, sequi, incidunt repellat, vero a mollitia provident porro ea necessitatibus culpa animi cum excepturi consequatur reiciendis nam?"
          answer="True"
        />
      </div>
    </ArticleLayout>
  );
}
