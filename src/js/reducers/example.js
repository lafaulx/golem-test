import {
  EXAMPLE_SET_SCORE,
  EXAMPLE_SET_TEXT,
} from '../actions/example';

import { handleActions } from 'redux-actions';

export default handleActions({
  [EXAMPLE_SET_SCORE]: (state, action) => Object.assign({}, state, { score: action.payload }),
  [EXAMPLE_SET_TEXT]: (state, action) => Object.assign({}, state, { text: action.payload }),
}, { score: '9.3', text: 'Hello' });
