import Link from "next/link";
import Button from "@/components/Button";
import Table from "@/components/Table";

export default function PageOne() {
  const data = [
    ["John Doe", "25", "USA"],
    ["Jane Doe", "22", "UK"],
    ["Sam Smith", "32", "Canada"],
  ];

  return (
    <div>
      <h1 className="font-bold font-heading text-slate-900 text-3xl">
        Pop Quiz
      </h1>
      <p className="font-medium text-lg text-slate-900 mt-8">
        Look at the table below. You have{" "}
        <span className="font-bold">five</span> seconds. Then click the
        &quot;Next&quot; button.
      </p>

      <div className="flex justify-center mt-16">
        <Table headings={["Name", "Age", "Country"]} data={data} />
      </div>

      <div className="flex justify-end mt-16">
        <Link className="" href="/page/2">
          <Button>Next</Button>
        </Link>
      </div>
    </div>
  );
}
