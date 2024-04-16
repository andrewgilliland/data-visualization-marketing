import { FC } from "react";

type TableProps = {
  headings?: (string | number)[];
  data?: (string | number)[][];
  className?: string;
};

const Table: FC<TableProps> = ({
  headings = ["A", "B", "C"],
  data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  className,
}) => (
  <table
    className={`table-auto text-slate-900 border-2 border-slate-900 rounded-md border-spacing-0 border-separate overflow-hidden ${className}`}
  >
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
