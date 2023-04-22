import React, { useState } from "react";
import DisplayTable from "../_utils/DisplayTable";

const CsvReader = () => {
  // save the input name to a state variable
  const [csvFile, setCsvFile] = useState(null);
  //save the file data to a state variable so the DsplayTable component can use it
  const [csvArray, setCsvArray] = useState([]);

  const processCSV = (str) => {
    // split the file data into rows from the newline character
    let rows = str.split("\n");
    // remove comma and replace by space
    rows = rows.map((row) => {
      return row.replace(/,/g, " ");
    });
    setCsvArray(rows);
  };

  const handleFileUpLoad = () => {
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target.result;
      processCSV(text);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <input
        type="file"
        accept=".csv"
        onChange={(e) => {
          setCsvFile(e.target.files[0]);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleFileUpLoad();
        }}
      >
        Submit
      </button>
      <br />
      <DisplayTable value={csvArray} />
    </div>
  );
};

export default CsvReader;
