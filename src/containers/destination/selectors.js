import { createSelector } from "@reduxjs/toolkit";

const selectDestination = state => state.destination;

const selectDataDestination = createSelector(selectDestination, (substate) => substate.data_destination);

const selectRequestingDestination = createSelector(selectDestination, (substate) => substate.requestingDestinations);

const selectDataDestinationNames = createSelector(selectDataDestination, (substate) => substate.map(dest => dest.name));

export { selectDestination, selectRequestingDestination, selectDataDestination, selectDataDestinationNames  };