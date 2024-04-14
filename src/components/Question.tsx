import { FC } from "react";

type QuestionProps = {
  question: string;
  answer: string;
  className?: string;
};

const Question: FC<QuestionProps> = ({ question, answer, className }) => {
  return (
    <div className={`group font-medium text-lg text-slate-900 ${className}`}>
      <p className="font-medium text-lg text-slate-900">{question}</p>
      <p className="transition opacity-0 group-hover:opacity-100 pt-2">
        {answer}
      </p>
    </div>
  );
};

export default Question;
