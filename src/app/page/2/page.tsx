import Link from "next/link";
import Button from "@/components/Button";

export default function PageTwo() {
  return (
    <div>
      <div>
        <h1 className="font-bold font-heading text-slate-900 text-3xl">
          Some Questions
        </h1>
        <p className="font-medium text-slate-900 text-sm mt-1">
          (Hover questions for answers)
        </p>
      </div>
      <div className="mt-8">
        <p className="font-medium text-lg text-slate-900">
          Dignissimos, sequi, incidunt repellat, vero a mollitia provident porro
          ea necessitatibus culpa animi cum excepturi consequatur reiciendis
          nam?
        </p>
      </div>

      <div className="flex justify-between items-center pt-12">
        <Link className="" href="/page/1">
          <Button iconPosition="left">Prev</Button>
        </Link>

        <Link className="" href="/page/3">
          <Button>Next</Button>
        </Link>
      </div>
    </div>
  );
}