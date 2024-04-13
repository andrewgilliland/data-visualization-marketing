import Link from "next/link";
import Button from "@/components/Button";
import Table from "@/components/Table";

export default function PageOne() {
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
        <Table tableHeadings={["Name", "Age", "Country"]} data={[[], [], []]} />
        {/* <table className="table-auto text-slate-900 border-2 border-slate-900 rounded-md border-spacing-0 border-separate">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Country</th>
            </tr>
          </thead>
          <tbody className="border border-slate-900">
            <tr>
              <td className="border px-4 py-2">John Doe</td>
              <td className="border px-4 py-2">25</td>
              <td className="border px-4 py-2">USA</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Jane Doe</td>
              <td className="border px-4 py-2">22</td>
              <td className="border px-4 py-2">UK</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Sam Smith</td>
              <td className="border px-4 py-2">32</td>
              <td className="border px-4 py-2">Canada</td>
            </tr>
          </tbody>
        </table> */}
      </div>

      <div className="flex justify-end mt-16">
        <Link className="" href="/page/2">
          <Button>Next</Button>
        </Link>
      </div>
    </div>
  );
}
