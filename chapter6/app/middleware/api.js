import 'whatwg-fetch';
import { API } from 'consts';
import { apiStarted, apiFinished, apiError } from 'actions/ui';

const apiMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type !== API) {
    return next(action);
  }

  const { url, success } = action.payload;
  const headers = new Headers();
  const accessToken = (getState() || {}).accessToken;

  if (accessToken) {
    headers.append("Access-Token", accessToken);
  }

  dispatch(apiStarted());

  return fetch(url, { headers })
    .then(response => response.json())
    .then(response => {
      dispatch(success(response));
      dispatch(apiFinished());
    })
    .catch(({ status, statusText }) =>
      dispatch(apiError(new Error({ status, statusText }))));
};

export default apiMiddleware;