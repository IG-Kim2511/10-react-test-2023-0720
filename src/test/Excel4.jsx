import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

const Excel3 = () => {
  const [file, setFile] = useState("");

  const handleClick = () => {
    const input = document.getElementById("file");
    input.click();
  };

  const filePathset = (event) => {
    setFile(event.target.files[0]);
  };

  const readFile = async () => {
    const bstr = await (new FileReader()).readAsBinaryString(file);
    const wb = XLSX.read(bstr, { type: "binary" });
    const wsname = wb.SheetNames[0];
    const ws = wb.Sheets[wsname];
    const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });

    console.log("Data>>>" + data);
    console.log(JSON.stringify(data));
  };

  useEffect(() => {
    if (file) {
      readFile();
    }
  }, [file]);

  return (
    <div>
      <input
        type="file"
        id="file"
        onChange={filePathset}
      />
      <button onClick={readFile}>Read File</button>
    </div>
  );
};

export default Excel3;