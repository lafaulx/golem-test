import {
  PHOTOGRAPHER_CREATE,
  PHOTOGRAPHER_CREATE_OK,
  PHOTOGRAPHER_CREATE_FAIL,
} from '../actions/photographer';

import { handleActions } from 'redux-actions';

const onLoadingObj = {
  isLoading: true,
};

const onSuccessObj = {
  isLoading: false,
};

export default handleActions({
  [PHOTOGRAPHER_CREATE]: (state) => Object.assign({}, state, onLoadingObj),
  [PHOTOGRAPHER_CREATE_OK]: (state, action) => Object.assign({}, state, onSuccessObj, { images: state.images.concat(action.payload.url) }),
  [PHOTOGRAPHER_CREATE_FAIL]: (state) => state,
}, { isLoading: false, images: [] });
