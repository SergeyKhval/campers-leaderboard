import { API } from './constants';
export const SET_CAMPERS = 'SET_CAMPERS';

export function fetchCampers(url) {
  return {
    type: API,
    payload: {
      url,
      success: SET_CAMPERS,
    },
  };
}