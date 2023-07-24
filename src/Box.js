import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";

function Box() {
  let [num,setNum] = useState(0);

  let increMemt =()=>{
    if(num >= 0){
      setNum(num + 1);
    }
  }
  let decreMemt = () =>{
    if(num > 0){
    setNum(num -1 );
    }
  }
  return (
   <React.Fragment>
    <button className="btn btn-outline-primary m-2" onClick={increMemt} style={{padding: '0.8em'}}>+</button>
    {num}
    <button className="btn btn-outline-warning  m-2" onClick={decreMemt} style={{padding: '0.8em'}}>-</button><br/>
    </React.Fragment>
  );
}

export default Box;
