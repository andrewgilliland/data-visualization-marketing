import { FC } from "react";
import Text from "./Text";

type QuestionProps = {
  question: string;
  answer: string;
  className?: string;
};

const Question: FC<QuestionProps> = ({ question, answer, className }) => {
  return (
    <div className={`group ${className}`}>
      <Text className="">{question}</Text>
      <Text className="transition opacity-0 group-hover:opacity-100 pt-2">
        {answer}
      </Text>
    </div>
  );
};

export default Question;
