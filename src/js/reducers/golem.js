import {
  GOLEM_CREATE,
  GOLEM_CREATE_OK,
  GOLEM_CREATE_FAIL,
} from '../actions/golem';

import { handleActions } from 'redux-actions';

const onLoadingObj = {
  isLoading: true,
};

const onSuccessObj = {
  isLoading: false,
};

export default handleActions({
  [GOLEM_CREATE]: (state) => Object.assign({}, state, onLoadingObj),
  [GOLEM_CREATE_OK]: (state, action) => Object.assign({}, state, onSuccessObj, { images: state.images.concat(action.payload.url) }),
  [GOLEM_CREATE_FAIL]: (state) => state,
}, { isLoading: false, images: [] });
