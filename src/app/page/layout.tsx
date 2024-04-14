"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
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
      <div className="bg-white flex shadow-lg min-h-screen max-w-3xl mx-auto p-5 md:p-16">
        <article className="max-w-screen-sm">{children}</article>
      </div>
    </div>
  );
}
