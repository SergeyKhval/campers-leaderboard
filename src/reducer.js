import { SET_CAMPERS } from './actions';

const campersReducer = (campers = [], action) => {
  switch (action.type) {
    case SET_CAMPERS:
      return [...action.payload];
    default:
      return campers;
  }
};

export default campersReducer;

export const getCampers = state => state;