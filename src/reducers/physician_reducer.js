import {
  RECEIVE_PHYSICIAN,
} from '../actions/physician_actions';
import { merge } from 'lodash';

const physicianReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHYSICIAN:
      return merge({}, state, {[action.data.id]: action.data});
    default:
      return state;
  }
};

export default physicianReducer;
