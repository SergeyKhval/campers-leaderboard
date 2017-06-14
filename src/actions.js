export const FETCH_CAMPERS = 'FETCH_CAMPERS';
export const SET_CAMPERS = 'SET_CAMPERS';

export function fetchCampers(url) {
  return {
    type: FETCH_CAMPERS,
    payload: url,
  }
}

export function setCampers(campers) {
  return {
    type: SET_CAMPERS,
    payload: campers,
  }
}