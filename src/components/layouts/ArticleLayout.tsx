import Link from "next/link";
import { FC } from "react";
import Button from "../Button";

type BaseLayoutProps = {
  title: string;
  children: React.ReactNode;
  page: number;
};

const ArticleLayout: FC<BaseLayoutProps> = ({ title, children, page }) => {
  return (
    <div className="">
      <h1 className="font-bold font-heading text-slate-900 text-3xl">
        {title}
      </h1>
      <article className="max-w-screen-sm">{children}</article>
      <div className="flex justify-between items-center pt-12">
        <Link
          className={page === 1 ? "invisible" : ""}
          href={`/page/${page - 1}`}
        >
          <Button iconPosition="left">Prev</Button>
        </Link>

        <Link className={page === 1 ? "" : ""} href={`/page/${page + 1}`}>
          <Button>Next</Button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleLayout;
