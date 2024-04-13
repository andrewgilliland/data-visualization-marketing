import { FC } from "react";

type TableProps = {
  tableHeadings: string[];
  data: string[][];
};

const Table: FC<TableProps> = ({ tableHeadings }) => {
  return (
    <table className="table-auto text-slate-900 border-2 border-slate-900 rounded-md border-spacing-0 border-separate">
      <thead>
        <tr>
          {tableHeadings.map((heading, index) => {
            return (
              <th key={index} className="px-4 py-2">
                {heading}
              </th>
            );
          })}
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
    </table>
  );
};

export default Table;
