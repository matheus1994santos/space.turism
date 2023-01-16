import { createSlice } from "@reduxjs/toolkit";
import data from './data.json'

export const initialState = {
  data: data,
  teste: {},
}

export const infoSlice = createSlice({
  name: 'data',
  initialState,
  reducers:{
    
  }
})

export default infoSlice.reducer;