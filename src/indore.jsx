import { useContext } from "react";
import { myContext } from "./context";

const Indore=()=>{
    const {course,setCourse}=useContext(myContext)
    return(<>
    <h1>Indore:{course}</h1>
    <button onClick={()=>{setCourse("mca")}} >click here</button>
    </>)
}
export default Indore;
