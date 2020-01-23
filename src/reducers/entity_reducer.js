import {
  combineReducers
} from 'redux';
import appointments from './appointment_reducer';
import patient from './patient_reducer';
import physicians from './physician_reducer';

const entitiesReducer = combineReducers({
  appointments,
  patient,
  physicians
});

export default entitiesReducer;
