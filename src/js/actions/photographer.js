import { CALL_API } from 'redux-api-middleware';

import prepareURL from '../utils/prepareURL';

export const PHOTOGRAPHER_CREATE = 'PHOTOGRAPHER_CREATE';
export const PHOTOGRAPHER_CREATE_OK = 'PHOTOGRAPHER_CREATE_OK';
export const PHOTOGRAPHER_CREATE_FAIL = 'PHOTOGRAPHER_CREATE_FAIL';

/*
 * action creators
 */
export const create = (data) => ({
  [CALL_API]: {
    endpoint: prepareURL('/api/photographer/create'),
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    types: [PHOTOGRAPHER_CREATE, PHOTOGRAPHER_CREATE_OK, PHOTOGRAPHER_CREATE_FAIL],
  },
});
