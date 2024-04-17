import ArticleLayout from "@/components/layouts/ArticleLayout";
import Question from "@/components/Question";

export default function PageFour() {
  return (
    <ArticleLayout title="Questions" page={4}>
      <p className="font-medium text-slate-900 text-sm mt-1">
        (Hover questions for answers)
      </p>

      <div className="mt-8">
        <Question question="1. Who had the least sales Q2?" answer="Egon" />
        <Question
          className="mt-4"
          question="2. Who had the most sales Q2?"
          answer="Whitney"
        />
        <Question
          className="mt-4"
          question="3. Who won more Grammy Awards, Whitney Houston or Tina Turner?"
          answer="Tina Turner. Whitney Houston won 6, Tina Turner won 8."
        />
      </div>
    </ArticleLayout>
  );
}
