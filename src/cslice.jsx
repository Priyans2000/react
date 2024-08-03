// import { createSlice } from "@reduxjs/toolkit";
//  const counterSlice=createSlice({
// name:"mycounter",
// initialState:{
//     cnt:0
// },
// reducers:{
//     myinc:(State)=>{
//         State.cnt=State.cnt+1;
//     },
//     mydic:(State)=>{
//         State.cnt=State.cnt-1;
//     }

// }
// })
// export default counterSlice.reducer;
// export const{myinc,mydic} = counterSlice.actions;
  //============================================

  import { createSlice } from "@reduxjs/toolkit";
 const clourSlice=createSlice({
name:"mycolor",
initialState:{
  bgcolor:"red"
},
reducers:{
    changeColor:(State,action)=>{
        State.bgcolor=action.payload
        }

}
})
export default clourSlice.reducer;
export const{ changeColor} = clourSlice.actions;