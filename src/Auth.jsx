import { useContext } from "react";
import { myloginContext } from "./Mylogin";

const Auth=()=>{
    Const {user,logout} = useContext(myloginContext);
    return(
        <>
        <h1>welcome:{user.name}</h1>
        <button onClick={()=>{logout()}}>logout</button>
        </>
    )
}
export default Auth;