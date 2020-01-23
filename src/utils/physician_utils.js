import { phsician } from '../constants';

export const fetchPhysician = () => new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve(phsician);
  }, 300);
});