import * as patientAPIUtils from '../utils/patient_utils';
export const RECEIVE_PATIENT = "RECEIVE_PATIENT";

const receivePatient = data => ({
  type: RECEIVE_PATIENT,
  data,
});

export const fetchPatient = () => dispatch => {
  return patientAPIUtils.fetchPatient().then(response => {
    return dispatch(receivePatient(response));
  }).catch(error => {
    // update redux and display error in UI
    throw error.message;
  });
};