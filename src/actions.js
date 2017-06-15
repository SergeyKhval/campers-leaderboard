import { API } from './constants';
export const SET_CAMPERS = 'SET_CAMPERS';

export function fetchCampers() {
  return {
    type: API,
    payload: {
      url: 'fccusers/top/recent',
      success: SET_CAMPERS
    },
  };
}