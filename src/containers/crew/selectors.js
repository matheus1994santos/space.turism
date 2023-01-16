import { createSelector } from "@reduxjs/toolkit";

const selectCrew = state => state.crew;

const selectDataCrew = createSelector(selectCrew, (substate) => substate.data_crew);

const selectDataCrewNames = createSelector(selectDataCrew, (substate) => substate.map(item => item.name));

const selectCommanderRole = createSelector(selectDataCrew, (substate) => substate.find(member => member.role === 'Commander'));

export { selectCrew, selectDataCrew, selectDataCrewNames, selectCommanderRole }