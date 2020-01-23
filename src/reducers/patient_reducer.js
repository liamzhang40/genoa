import {
  RECEIVE_PATIENT,
} from '../actions/patient_actions';

const patientReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PATIENT:
      return action.data;
    default:
      return state;
  }
};

export default patientReducer;
