import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex border-b-2 border-slate-900 px-[5%] py-4 shadow-md">
        <Link className="group" href="/">
          <h1 className="font-semibold font-heading text-2xl text-slate-900">
            Data Visualization in Marketing
          </h1>
          <div className="bg-slate-900 h-[2px] w-[0%] group-hover:w-full transition-all duration-500" />
        </Link>
      </div>
      <div className="bg-white flex  shadow-lg min-h-screen mx-32 p-5 md:p-16">
        <article className="max-w-screen-sm">{children}</article>
      </div>
    </div>
  );
}
