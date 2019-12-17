import React from "react";
import TabelHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ columns, onSort, sortcoulumn, data, onlike, onDelete }) => {
  return (
    <table className="table table-striped">
      <TabelHeader
        onSort={onSort}
        sortcoulumn={sortcoulumn}
        columns={columns}
      />

      <TableBody
        data={data}
        columns={columns}
        onlike={onlike}
        onDelete={onDelete}
      />
    </table>
  );
};

export default Table;
