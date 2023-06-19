
import React from "react";

const TableRow = ({ item, selectedRow, handleRowClick }) => {
  const handleClick = () => {
    handleRowClick(item);
  };

  return (
    <tr
      onClick={handleClick}
      className={selectedRow === item ? "selected" : ""}
    >
      <td>{item.id}</td>
      <td>{item.author}</td>
      <td>{item.title}</td>
      <td>{item.kind}</td>
    </tr>
  );
};

export default TableRow;
