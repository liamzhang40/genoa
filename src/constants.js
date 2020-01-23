export const appointments = [{
  "created_at": "2015-04-21T10:44:51-06:00",
  "end": "2015-04-24T07:30:00-06:00",
  "id": 695,
  "patient_id": 16,
  "physician_id": 14,
  "start": "2015-04-24T07:00:00-06:00",
  "updated_at": "2015-04-21T10:44:51-06:00",
  "patient_name": "Mike Ross",
  "physician_name": "Gregory House",
}];

export const patientHistory = {
  "created_at": "2015-04-20T10:44:51-06:00",
  "last_appointment_end": "2015-04-23T07:30:00-06:00",
  "id": 680,
  "patient_id": 16,
  "physician_id": 14,
  "last_appointment_start": "2015-04-23T07:00:00-06:00",
  "updated_at": "2015-04-20T10:44:51-06:00",
  "patient_name": "Mike Ross",
  "physician_name": "Gregory House",
  "notes": "Feeling sad or down, Confused thinking or reduced ability to concentrate, Excessive fears or worries, or extreme feelings of guilt",
};

export const phsician = {
  "created_at": "2015-04-20T10:44:51-06:00",
  "id": 14,
  "name": "Gregory House",
  "updated_at": "2015-04-20T10:44:51-06:00",
  "specialty": "Psychiatry",
  "education": "Vagelos College of Physicians and Surgeons",
  "profile": "https://miro.medium.com/max/3840/1*zCw9YQICYZzozYZsqeIiYA.png"
};

// name: Title to display in table
// field: Key to access corresponding value from row object
// parseFunction: Take row object as argument and output display value
export const ONHOVER = "ONHOVER";

export const columns = [
  {
    name: "Start Date Time",
    field: "start",
    parseFunc: obj => {
      if (obj.start) {
        return parseDateTime(obj.start);
      }
    }
  },
  {
    name: "End Date Time",
    field: "end",
    parseFunc: obj => {
      if (obj.end) {
        return parseDateTime(obj.end);
      }
    }
  },
  {
    name: "Doctor Name",
    field: "physician_name",
    cellType: ONHOVER,
  },
  {
    name: "Patient Name",
    field: "patient_name",
  }
];

export const patientDetailFields = [
  {
    name: "Last Appointment Date",
    field: "last_appointment_start",
    parseFunc: obj => {
      if (obj.last_appointment_start && obj.last_appointment_end) {
        return `${parseDateTime(obj.last_appointment_start)} - ${parseDateTime(obj.last_appointment_end)}`;
      }
    }
  },
  {
    name: "Patient Symptoms",
    field: "notes",
  }
];


const parseDateTime = dateString => {
  const dateObj = new Date(dateString);
  const MO = prefixZero(dateObj.getMonth() + 1);
  const DD = prefixZero(dateObj.getDate());
  const YY = prefixZero(dateObj.getFullYear());
  const HH = prefixZero(dateObj.getHours());
  const MI = prefixZero(dateObj.getMinutes());
  const SS = prefixZero(dateObj.getSeconds());
  return `${MO}/${DD}/${YY} ${HH}:${MI}:${SS}`;
};

const prefixZero = num => {
  return num > 9 ? num : "0" + num;
};