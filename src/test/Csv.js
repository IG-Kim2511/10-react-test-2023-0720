import React, { useState } from "react";
import XLSX from "xlsx";

const Csv = () => {
  const [data, setData] = useState([]);

  const readExcelFile = (file) => {
    const workbook = XLSX.readFile(file);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = sheet.data;
    setData(data);
  };

  return (
    <div>
      <input type="file" accept=".csv, .xls" name="file" onChange={(event) => readExcelFile(event.target.files[0])} />
      <Table />
    </div>
  );
};

const Table = () => {
  const { data } = useState([]);
  return (
    <table>
      <thead>
        <tr>
          {data.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Csv;