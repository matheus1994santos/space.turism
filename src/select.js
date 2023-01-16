import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./slice";

const selectData = (state) => state.info || initialState

const selectInfoData = createSelector(
  selectData,
  (state) => state.data
);

export {
  selectData,
  selectInfoData
}
