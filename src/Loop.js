import Box from "./Box";
import { useState } from "react";
function Loop() {
    const [myArray] = useState([1, 2, 3, 4, 5]);
    let loo = () => {
        return [<Box />, <Box />, <Box />, <Box />, <Box />];
    }
    return (
        <div>
            {myArray.map((item, index) => (
                
                <Box />
            ))}
        </div>
    );
}
export default Loop;