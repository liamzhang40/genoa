import * as appointmentAPIUtils from '../utils/appointment_utils';
export const RECEIVE_APPOINTMENTS = "RECEIVE_APPOINTMENTS";

const receiveAppointments = data => ({
  type: RECEIVE_APPOINTMENTS,
  data,
});

export const fetchAppointments = () => dispatch => {
  return appointmentAPIUtils.fetchAppointments().then(response => {
    return dispatch(receiveAppointments(response));
  }).catch(error => {
    // update redux and display error in UI
    throw error.message;
  });
};