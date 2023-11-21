import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../Axios";

export const getData = createAsyncThunk('data/getData', async (_, thunkApi) => {
    console.log("hello");
  const response = await axios.get("/getData");
  console.log("response"+response.data);
  return response.data;
});
export const getDataAsc = createAsyncThunk('data/getDataAsc', async (_, thunkApi) => {
  console.log("hello");
const response = await axios.get("/getDataNew");
console.log("response"+response.data);
return response.data;
});
export const getDataDesc = createAsyncThunk('data/getDataDesc', async (_, thunkApi) => {
  console.log("hello");
const response = await axios.get("/getDataOld");
console.log("response"+response.data);
return response.data;
});
export const getDataAmountLow = createAsyncThunk('data/getDataAmountLow', async (_, thunkApi) => {
  console.log("hello");
const response = await axios.get("/getDataNew/amount");
console.log("response"+response.data);
return response.data;
});
export const getDataAmountHigh = createAsyncThunk('data/getDataAmountHigh', async (_, thunkApi) => {
  console.log("hello");
const response = await axios.get("/getDataOld/amount");
console.log("response"+response.data);
return response.data;
});

const initialState = {
  data: [],
  loading: false,
  err:""
  // status: "",
};
 const dataSlice = createSlice({
  name: "Data",
  reducers: {
    search:(state,payload)=>{
       
        const newData = state.data.filter((user)=>user.username === payload.payload)
        console.log(newData)
        if(newData.length === 0){
          state.err="Enter Valid Name"
        }else{
          state.data = newData
        }
        // state.data = newData
        // state.loading = !state.loading
    },
    AmountLow: async (state,payload)=>{
      const response = await axios.get("/getDataNew/amount");
      console.log("response"+response.data);
      state.data = response.data
      state.err=""

    },
    AmountHigh: async (state,payload)=>{
      const response = await axios.get("/getDataOld/amount");
      console.log("response"+response.data);
      state.data = response.data
      state.data=""

    }
  },
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
      state.loading = true;
      state.status = "Pending";
      state.err="Process in Pending"
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data=action.payload;      state.loading = false;
      state.status = "Fullfilled";
      state.err=""
    
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = "false";
      state.status = "Rejected";
      state.err="Try Again"
    });
    builder.addCase(getDataAsc.pending, (state, action) => {
      state.loading = true;
      state.status = "Pending";
      state.err="Process in Pending"

    });
    builder.addCase(getDataAsc.fulfilled, (state, action) => {
      state.data=action.payload;      state.loading = false;
      state.status = "Fullfilled";
      state.err=""

    
    });
    builder.addCase(getDataDesc.rejected, (state, action) => {
      state.loading = "false";
      state.status = "Rejected";
      state.err="Try Again"

    });
    builder.addCase(getDataDesc.pending, (state, action) => {
      state.loading = true;
      state.status = "Pending";
      state.err="Process in Pending"

    });
    builder.addCase(getDataDesc.fulfilled, (state, action) => {
      state.data=action.payload;      state.loading = false;
      state.status = "Fullfilled";
      state.err=""

    
    });
    builder.addCase(getDataAsc.rejected, (state, action) => {
      state.loading = "false";
      state.status = "Rejected";
      state.err="Try Again"

    });
    builder.addCase(getDataAmountHigh.pending, (state, action) => {
      state.loading = true;
      state.status = "Pending";
      state.err="Process in Pending"

    });
    builder.addCase(getDataAmountHigh.fulfilled, (state, action) => {
      state.data=action.payload;      state.loading = false;
      state.status = "Fullfilled";
      state.err=""

    
    });
    builder.addCase(getDataAmountHigh.rejected, (state, action) => {
      state.loading = "false";
      state.status = "Rejected";
      state.err="Try Again"

    });
    builder.addCase(getDataAmountLow.pending, (state, action) => {
      state.loading = true;
      state.status = "Pending";
      state.err="Process in Pending"

    });
    builder.addCase(getDataAmountLow.fulfilled, (state, action) => {
      state.data=action.payload;      state.loading = false;
      state.status = "Fullfilled";
      state.err=""

    
    });
    builder.addCase(getDataAmountLow.rejected, (state, action) => {
      state.loading = "false";
      state.status = "Rejected";
      state.err="Try Again"

    });
  },
});
export const {loading,status,search}= dataSlice.actions;
export default dataSlice.reducer;