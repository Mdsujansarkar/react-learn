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
    <button className="btn btn-outline-primary" onClick={increMemt}>+</button>
    {num}
    <button onClick={decreMemt}>-</button>
    </React.Fragment>
  );
}

export default Box;
