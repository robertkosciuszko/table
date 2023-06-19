import React, { useEffect, useState } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import Breadcrumb from "./Breadcrumb";
import DetailedData from "./DetailedData";
import "./TableComponent.css";

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [detailedData, setDetailedData] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=${pageSize}&_page=${currentPage}`
      );
      setData((prevData) => [...prevData, ...response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setDetailedData(row);
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="table-container">
      <Breadcrumb selectedRow={selectedRow} />
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Author</th>
            <th>Title</th>
            <th>Kind</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              item={item}
              selectedRow={selectedRow}
              handleRowClick={handleRowClick}
            />
          ))}
        </tbody>
      </table>
      <DetailedData detailedData={detailedData} />
      <button className="load-more-button" onClick={handleLoadMore}>
        Load More
      </button>
    </div>
  );
};

export default TableComponent;
