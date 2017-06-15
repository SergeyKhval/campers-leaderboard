import { API } from './constants';
import config from './config';

export const apiMiddleware = store => next => action => {
  if (action.type !== API) {
    return next(action);
  }

  fetch(`${config.API_HOST}${action.payload.url}`)
    .then(response => {
      if (response.status >= 200 && response.status < 400) {
        return response.json();
      }

      return Promise.reject('Api error');
    })
    .then(response => store.dispatch({ type: action.payload.success, payload: response }))
    .catch(console.error);

};