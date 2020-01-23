import React from 'react';
import {
  connect
} from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchPatient } from '../../actions/patient_actions';
import ListItem from './listItem';
import { ONHOVER } from '../../constants';

const ListItems = ({
    rows,
    columns,
    openModal,
    fetchPatient
  }) => {
  const handleClick = patientId => {
    fetchPatient(patientId).then(() => {
      openModal("patientDetails");
    });
  };

  return (
    <React.Fragment>
      {
        rows.map((appointment, i) => {
          const cells = columns.map((column, j) => {
            const cellValue = column.parseFunc ? column.parseFunc(appointment) : appointment[column.field];
            switch(column.cellType) {
              case ONHOVER:
                return (
                  <ListItem key={j} cellValue={cellValue} data={appointment}/>
                );
              default: 
                return <td key={j}>{cellValue}</td>;
            }
          });
          
          return <tr key={i} onClick={() => handleClick(appointment.patient_id)}>{cells}</tr>;
        })
      }
    </React.Fragment>
  );
};

export default connect(null, {
  openModal,
  fetchPatient
})(ListItems);