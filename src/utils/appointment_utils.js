import { appointments } from '../constants';

export const fetchAppointments = () => new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve(appointments);
  }, 300);
});