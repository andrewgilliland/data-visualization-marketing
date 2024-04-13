import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Link href="/page/1">
        <h1 className="font-bold font-heading text-slate-900 text-5xl text-center max-w-[28rem]">
          Data Visualization in Marketing
        </h1>
      </Link>
    </div>
  );
}
