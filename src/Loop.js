import Box from "./Box";
import { useState } from "react";
function Loop() {
    const [myArray, setArray] = useState([]);
    const pushs = (num) => {
        setArray([...myArray, num++]);
    }
    const onDelete=(num)=>{
       const arrayLanth = myArray.length;
        setArray([myArray, num=num-1]);
      
    }
    console.log(myArray.length)
    return (
        <div>
            <button className="btn btn-outline-primary" onClick={()=>pushs(1)} style={{ padding: '0.8em' }}>Add Box</button><br />
            {myArray.map((item, index) => (
                <Box />
            ))}
            <button className="btn btn-danger" onClick={()=>onDelete(1)} style={{ padding: '0.8em' }}>Remove</button><br />
        </div>
    );
}
export default Loop;