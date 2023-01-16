import { createSlice } from "@reduxjs/toolkit";
import data from '../../data.json'

export const initialState = {
  data_technology: data.technology,
}

export const technologySlice = createSlice({
  name: 'technology',
  initialState,
  reducers:{
    
  }
})

export default technologySlice.reducer;