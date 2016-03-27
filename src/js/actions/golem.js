import { CALL_API } from 'redux-api-middleware';

import prepareURL from '../utils/prepareURL';

export const GOLEM_CREATE = 'GOLEM_CREATE';
export const GOLEM_CREATE_OK = 'GOLEM_CREATE_OK';
export const GOLEM_CREATE_FAIL = 'GOLEM_CREATE_FAIL';

/*
 * action creators
 */
export const create = (data) => ({
  [CALL_API]: {
    endpoint: prepareURL('/api/golem/create'),
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    types: [GOLEM_CREATE, GOLEM_CREATE_OK, GOLEM_CREATE_FAIL],
  },
});
