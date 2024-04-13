import { FC } from "react";

type TableProps = {
  headings: string[];
  data: string[][];
};

const Table: FC<TableProps> = ({ headings, data }) => {
  return (
    <table className="table-auto text-slate-900 border-2 border-slate-900 rounded-md border-spacing-0 border-separate">
      <thead className="bg-slate-100 rounded-t-md">
        <tr>
          {headings.map((heading, index) => (
            <th key={index} className="px-4 py-2">
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="">
        {data.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td key={index} className="px-4 py-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
