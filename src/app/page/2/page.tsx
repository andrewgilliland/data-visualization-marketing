import Link from "next/link";
import Button from "@/components/Button";

export default function PageTwo() {
  return (
    <div>
      <h1 className="font-bold font-heading text-slate-900 text-3xl">
        Page Two
      </h1>
      <p className="font-medium text-lg text-slate-900 mt-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        obcaecati illum ad! Dignissimos, sequi, incidunt repellat, vero a
        mollitia provident porro ea necessitatibus culpa animi cum excepturi
        consequatur reiciendis nam? Ipsa exercitationem inventore fugiat placeat
        fuga consectetur asperiores animi laboriosam iste, dolore nobis quam, ab
        vitae magni. Commodi, cum officia?
      </p>

      <div className="flex justify-between items-center pt-12">
        <Link className="" href="/page/1">
          <Button iconPosition="left">Prev</Button>
        </Link>

        <Link className="" href="/page/2">
          <Button>Next</Button>
        </Link>
      </div>
    </div>
  );
}
