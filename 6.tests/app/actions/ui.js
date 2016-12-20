import { createAction } from 'redux-actions';
import * as actions from 'consts';

export const apiStarted = createAction(actions.API_STARTED);
export const apiFinished = createAction(actions.API_FINISHED);
export const apiError = createAction(actions.API_ERROR);