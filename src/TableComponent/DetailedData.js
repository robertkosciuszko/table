import React from "react";
import "../App.css";

const DetailedData = ({ selectedRow }) => {
  return (
    <div className="detailed-data">
      {selectedRow && (
        <>
          <h2 className="detailed-data-title">{selectedRow.title}</h2>
          <p className="detailed-data-description">{selectedRow.description}</p>
        </>
      )}
    </div>
  );
};

export default DetailedData;
