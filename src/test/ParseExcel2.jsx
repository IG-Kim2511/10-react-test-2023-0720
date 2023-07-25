import React, { useState } from "react";
import * as XLSX from 'xlsx'

const ParseExcel2 = () => {

    const [data, setData] = useState([]);
    console.log(data)

    const readExcelFile = (file) => {
      const workbook = XLSX.readFile(file);
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const xlsxData = sheet.data;
    //   console.log(xlsxData)
      setData(JSON.stringify(xlsxData));
    };

  return (
    <div>ParseExcel2
    
        <div>
            <input type="file" name="file" onChange={(event) => readExcelFile(event.target.files[0])} />
            
            <JsonData data={data} setData={setData}/>
        </div>
    
    </div>
  )
}

const JsonData = ({data,setData}) => {
    // const { data } = useState([]);
    return (
      <div>
        <textarea
          id="json-data"
          cols="30"
          rows="10"
          value={data}
          onChange={(event) => setData(event.target.value)}
        />
        <div>jsondata</div>
      </div>
    );
  };

export default ParseExcel2