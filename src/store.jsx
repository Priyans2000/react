
// import { configureStore } from "@reduxjs/toolkit";

// import myans from "./cslice";
// const store = configureStore({
//     reducer: {
//         mycounter: myans
//     }
// }
// )
// export default store;
//==============================


import { configureStore } from "@reduxjs/toolkit";

import myreduser from "./cslice";
const store = configureStore({
    reducer: {
        mycolor:myreduser
    }
}
)
export default store;