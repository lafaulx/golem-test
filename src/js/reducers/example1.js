import {
  EXAMPLE1_SET_SCORE,
} from '../actions/example1';

import { handleActions } from 'redux-actions';

export default handleActions({
  [EXAMPLE1_SET_SCORE]: (state, action) => action.payload,
}, '9.3');
