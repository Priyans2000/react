import { createSlice, ReducerType } from "@reduxjs/toolkit";
const Todo =()=>{
    const todoSlice=createSlice({
        name:"todos",
        initialState: { 
        task:[]
    },
    })
    Reducer:{
    addTask:(state,action)=>{
        state.task.push(action.payload);
    }
}
}
  
export default Todo;

