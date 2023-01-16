import { createSlice } from "@reduxjs/toolkit";
import data from '../../data.json'

export const initialState = {
  data_destination: [],
}

export const destinationSlice = createSlice({
  name: 'destination',
  initialState,
  reducers:{
    requestDestinations: (state, action) => {
      state.requestingDestinations = true;
    },
    loadDestinations: (state, action) => {
      state.data_destination = action.payload.destinations;
      state.requestingDestinations = false;
    },
    loadDestinationsError: (state, action) => {
      state.requestingDestinationsError = true;
      state.requestingDestinationsErrorMessage = action.payload.errorMsg;
    }
  }
})

export const { requestDestinations, loadDestinations, loadDestinationsError } = destinationSlice.actions;

export default destinationSlice.reducer;