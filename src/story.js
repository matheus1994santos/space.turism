import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./slice";
import crewSlice from "./containers/crew/slice";
import destinationSlice from "./containers/destination/slice";
import technologySlice  from "./containers/technology/slice";

export const store = configureStore({
  reducer: {
    info: infoSlice,
    destination: destinationSlice,
    crew: crewSlice,
    technology: technologySlice
  }
})