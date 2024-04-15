import { FC, ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
};

const Text: FC<TextProps> = ({ children, className }) => {
  return (
    <p className={`font-medium text-lg text-slate-900 ${className}`}>
      {children}
    </p>
  );
};

export default Text;
