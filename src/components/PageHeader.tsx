import Link from "next/link";

const PageHeader = () => {
  return (
    <div className="border-b-2 border-slate-900 shadow-lg">
      <div className="flex mx-auto py-4 w-[48rem]">
        <Link className="group" href="/">
          <h1 className="font-semibold font-heading text-2xl text-slate-900">
            Data Visualization in Marketing
          </h1>
          <div className="bg-slate-900 h-[2px] w-[0%] group-hover:w-full transition-all duration-500" />
        </Link>
      </div>
    </div>
  );
};

export default PageHeader;
