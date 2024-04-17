import ArticleLayout from "@/components/layouts/ArticleLayout";
import Question from "@/components/Question";

export default function PageTwo() {
  return (
    <ArticleLayout title="Some Questions" page={2}>
      <p className="font-medium text-slate-900 text-sm mt-1">
        (Hover questions for answers)
      </p>

      <div className="mt-8">
        <Question question="1. Who had the highest sales Q1?" answer="Tina" />
        <Question
          className="mt-4"
          question="2. Who had the lowest sales Q1?"
          answer="Biff"
        />
        <Question
          className="mt-4"
          question="3. (Extra Credit) Who had sold more albums over their lifetime, Tina Turner or Whitney Houston?"
          answer="Whitney. Whitney Houston sold 200 million records worldwide, while Tina Turner sold 100 million records worldwide."
        />
      </div>
    </ArticleLayout>
  );
}
