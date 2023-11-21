import {configureStore} from "@reduxjs/toolkit"
import dataSlice from "./Features/DataSlice"
const Store = configureStore({
    reducer:{
        data: dataSlice
    }
})
export default Store