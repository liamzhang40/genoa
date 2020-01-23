import * as physicianAPIUtils from '../utils/physician_utils';
export const RECEIVE_PHYSICIAN = "RECEIVE_PHYSICIAN";

const receivePhysician = data => ({
  type: RECEIVE_PHYSICIAN,
  data,
});

export const fetchPhysician = () => dispatch => {
  return physicianAPIUtils.fetchPhysician().then(response => {
    return dispatch(receivePhysician(response));
  }).catch(error => {
    // update redux and display error in UI
    throw error.message;
  });
};