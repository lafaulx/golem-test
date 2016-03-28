import {
  EXAMPLE_SET_SCORE,
} from '../actions/example';

import { handleActions } from 'redux-actions';

export default handleActions({
  [EXAMPLE_SET_SCORE]: (state, action) => action.payload,
}, '9.3');
