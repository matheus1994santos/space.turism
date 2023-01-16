import { createSelector } from "@reduxjs/toolkit";

const selectTechnology = state => state.technology;

const selectDataTechnology = createSelector(selectTechnology, (substate) => substate.data_technology);

export { selectTechnology, selectDataTechnology }