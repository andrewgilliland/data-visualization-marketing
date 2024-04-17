import ArticleLayout from "@/components/layouts/ArticleLayout";
import Question from "@/components/Question";

export default function PageSix() {
  return (
    <ArticleLayout title="Some Questions" page={6}>
      <p className="font-medium text-slate-900 text-sm mt-1">
        (Hover questions for answers)
      </p>

      <div className="mt-8">
        <Question question="1. Who had the least sales for Q3?" answer="Biff" />
        <Question
          className="mt-4"
          question="2. Who had the highest sales for Q3?"
          answer="Whitney"
        />
        <Question
          className="mt-4"
          question="3. Who had more Billboard Hot 100 number-one singles, Whitney Houston or Tina Turner?"
          answer="Whitney Houston. Whitney Houston had 11, Tina Turner had 1."
        />
      </div>
    </ArticleLayout>
  );
}
