import {
  RECEIVE_APPOINTMENTS,
} from '../actions/appointment_actions';

const appointmentReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_APPOINTMENTS:
      return action.data;
    // case RECEIVE_ADDITIONAL_APPOINTMENTS:
    //   return merge({}, state, action.comments);
    // case RECEIVE_APPOINTMENT:
    //   return merge({}, state, {
    //     [action.comment.id]: action.comment
    //   });
    // case REMOVE_APPOINTMENT:
    //   let newState = merge({}, state);
    //   delete newState[action.commentId];
    //   return newState;
    default:
      return state;
  }
};

export default appointmentReducer;
