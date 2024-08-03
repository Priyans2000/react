import { useState } from "react";
import { useContext } from "react";
import {myloginContext} from "./"
const Unauth=()=>{
    const[nm,setnm]=useState("")

    const{login}=useContext(myloginContext)
    return(
        <>
        <h3>user login syatm</h3>
        Enter name:
        <input type="text" value={nm} onChange={(e)=>{setnm(e.target.value)}}/>       
        <button onClick={()=>{login(nm)}}>login</button>
         </>   )
}
export default Unauth;