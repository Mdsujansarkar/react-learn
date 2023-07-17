import Box from "./Box";
function Loop(){
 let loo = ()=>{
    return [<Box/>,<Box/>,<Box/>,<Box/>,<Box/>];
 }
    return (
        <div>
            {loo}
        </div>
    );
}
export default Loop;