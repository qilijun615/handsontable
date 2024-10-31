import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";

registerAllModules();

function App() {
  const [data, setData] = useState([
    ["ID", "Name", "Age"],
    [1, "John Doe", 30],
    [2, "Jane Smith", 25],
  ]);
  const addRow = () => {
    setData((prevData) => [...prevData, ["", "", ""]]);
  };

  const deleteRow = (rowIndex) => {
    setData((prevData) => prevData.filter((_, index) => index !== rowIndex));
  };

  return (
    <div>
      <h1>CRUD with Handsontable</h1>
      <HotTable
        data={data}
        colHeaders={true}
        rowHeaders={true}
        licenseKey="non-commercial-and-evaluation"
      />
      <button onClick={addRow}>Add Row</button>
      <button onClick={deleteRow}>Delete Row</button>
    </div>
  );
}

export default App;
