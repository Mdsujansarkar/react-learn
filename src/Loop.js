import Box from "./Box";
import { useState } from "react";
function Loop() {
    const [myArray] = useState([1, 2, 3, 4, 5]);
    let loo = () => {
        return [<Box />, <Box />, <Box />, <Box />, <Box />];
    }
    return (
        <div>
            <button className="btn btn-outline-primary" style={{padding: '0.8em'}}>Add Box</button><br/>
            {myArray.map((item, index) => (
                 
                <Box />
            ))}
        </div>
    );
}
export default Loop;