import { ReactNode } from "react";
import PageHeader from "@/components/PageHeader";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div>
      <PageHeader />
      <div className="flex flex-col bg-white shadow-lg min-h-screen max-w-3xl mx-auto p-5 md:p-16">
        {children}
      </div>
    </div>
  );
}
