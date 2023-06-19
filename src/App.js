import React from "react";
import TableComponent from "./TableComponent/TableComponent";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Dynamiczna tabela</h1>
      <TableComponent />
    </div>
  );
}

export default App;
