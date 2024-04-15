import { FC } from "react";

type TableProps = {
  headings: string[];
  data: string[][];
};

const Table: FC<TableProps> = ({ headings, data }) => (
  <table className="table-auto text-slate-900 border-2 border-slate-900 rounded-md border-spacing-0 border-separate overflow-hidden">
    <thead className="bg-slate-100 border-slate-900">
      <tr>
        {headings.map((heading, index) => (
          <th key={index} className="px-4 py-2 border-b border-slate">
            {heading}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index} className="hover:bg-slate-50">
          {row.map((cell, index) => (
            <td key={index} className="px-4 py-2 border border-slate-200">
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
