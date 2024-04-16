import { FC } from "react";

type HeadingProps = {
  children: React.ReactNode;
  sectionLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Heading: FC<HeadingProps> = ({ children, sectionLevel }) => {
  switch (sectionLevel) {
    case "h1":
      return (
        <h1 className="font-bold font-heading text-slate-900 text-3xl">
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className="font-bold font-body text-xl text-slate-900">
          {children}
        </h2>
      );
    case "h3":
      return <h3>{children}</h3>;
    case "h4":
      return <h4>{children}</h4>;
    case "h5":
      return <h5>{children}</h5>;
    case "h6":
      return <h6>{children}</h6>;
    default:
      return <h1>{children}</h1>;
  }
};

export default Heading;
