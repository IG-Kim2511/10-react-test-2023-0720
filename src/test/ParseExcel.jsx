import React from 'react'

const ParseExcel = () => {


    const handleFile = (e) =>{
        console.log(e.target.files[0])
    }

  return (
    <div>ParseExcel
    
    <input type='file' onChange={(e)=> handleFile(e)}/>
    
    
    </div>
  )
}

export default ParseExcel