import axios from 'axios';
import { API } from '../consts';
import { apiStarted, apiFinished, apiError } from '../actions/ui';

const apiMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type !== API) {
    return next(action);
  }

  const { url, success } = action.payload;
  const headers = {};
  const accessToken = (getState() || {}).accessToken;

  if (accessToken) {
    headers['Access-Token'] = accessToken;
  }

  dispatch(apiStarted());

  return axios.request({ url, headers })
    .then(response => {
      dispatch(success(JSON.parse(response.data)));
      dispatch(apiFinished());
    })
    .catch(params => dispatch(apiError(new Error(params))));
};

export default apiMiddleware;
