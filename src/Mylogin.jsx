import { Children, createContext,useState } from "react";

const myloginContext= createContext();
const loginContext=({Children})=>{
    const [user,setuser]=useState({name:"",auth:false});
const login=(nm)=>{
    setuser({name:nm, auth:true})

}
const logout=()=>{
    setuser({name:"",auth:false})
}
return(
    <>
   < myloginContext.provider value={{user,login,logout}}>
   
   {Children}
   </myloginContext.provider>
    </>
)
}
export default loginContext;
export {myloginContext}