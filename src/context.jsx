import { createContext, useState } from "react";


const myContext=createContext();
const CourseContext=({children})=>{
    const [course,setCourse]=useState("bcom")
    return(<>
   <myContext.Provider value={{course,setCourse}}>
    {children}
   </myContext.Provider>


    </>)
}
export default CourseContext;
export {myContext}
