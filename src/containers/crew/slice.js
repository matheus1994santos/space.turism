import { createSlice } from "@reduxjs/toolkit";
import data from '../../data.json'

export const initialState = {
  data_crew: data.crew,
}

export const crewSlice = createSlice({
  name: 'crew',
  initialState,
  reducers:{
    
  }
})

export default crewSlice.reducer;