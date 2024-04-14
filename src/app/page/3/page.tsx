import Link from "next/link";
import Button from "@/components/Button";
import BarChart from "@/components/charts/BarChart";

export default function PageThree() {
  return (
    <div>
      <h1 className="font-bold font-heading text-slate-900 text-3xl">
        Pop Quiz 2
      </h1>
      <p className="font-medium text-lg text-slate-900 mt-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        obcaecati illum ad!
      </p>

      <div className="h-96">
        <BarChart />
      </div>

      <div className="flex justify-between items-center pt-12">
        <Link className="" href="/page/2">
          <Button iconPosition="left">Prev</Button>
        </Link>

        <Link className="" href="/page/4">
          <Button>Next</Button>
        </Link>
      </div>
    </div>
  );
}
