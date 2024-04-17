import ArticleLayout from "@/components/layouts/ArticleLayout";
import Question from "@/components/Question";

export default function PageEight() {
  return (
    <ArticleLayout title="Some More Questions" page={8}>
      <p className="font-medium text-slate-900 text-sm mt-1">
        (Hover questions for answers)
      </p>

      <div className="mt-8">
        <Question
          question="1. Who had the lowest sales for Q4?"
          answer="Egon"
        />
        <Question
          className="mt-4"
          question="2. Who had the highest sales for Q4?"
          answer="Whitney"
        />
        <Question
          className="mt-4"
          question="3. Who is the better singer, Whitney Houston or Tina Turner?"
          answer="That's like, just your opinion dude."
        />
      </div>
    </ArticleLayout>
  );
}
