import { compose } from "redux";
import { FETCH_CAMPERS, setCampers } from "./actions";
import config from "./config";

function fetchData(url, callback) {
  const headers = new Headers();

  headers.append('Content-Type', 'application/json');

  const options = { method: 'GET', headers };

  fetch(url, options)
    .then((response) => {
      if (response.status !== 200) {
        console.error(`Error fetching campers: ${response.status}`)
      } else {
        response.json().then(callback)
      }
    })
    .catch((err) => {
      console.error(`Error fetching campers: ${JSON.stringify(err)}`)
    })
}

export const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.type === FETCH_CAMPERS) {
    fetchData(`${config.API_HOST}/${action.payload}`, compose(dispatch, setCampers))
  }

  next(action);
};