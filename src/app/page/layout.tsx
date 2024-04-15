import Link from "next/link";
import { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div>
      <div className="border-b-2 border-slate-900 shadow-lg">
        <div className="flex mx-auto py-4 w-[52rem]">
          <Link className="group" href="/">
            <h1 className="font-semibold font-heading text-2xl text-slate-900">
              Data Visualization in Marketing
            </h1>
            <div className="bg-slate-900 h-[2px] w-[0%] group-hover:w-full transition-all duration-500" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col bg-white shadow-lg min-h-screen max-w-3xl mx-auto p-5 md:p-16">
        {children}
      </div>
    </div>
  );
}
