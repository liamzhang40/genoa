import { patientHistory } from '../constants';

export const fetchPatient = () => new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve(patientHistory);
  }, 300);
});