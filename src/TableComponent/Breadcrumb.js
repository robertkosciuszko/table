import React from "react";
import "../App.css";

const Breadcrumb = ({ selectedRow }) => {
  const path =
    selectedRow && selectedRow.path ? selectedRow.path.split("/") : [];

  return (
    <div className="breadcrumb">
      {path.map((folder, index) => (
        <span key={index} className="breadcrumb-item">
          {folder}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
