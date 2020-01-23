import React from 'react';
import Modal from './modal';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { patientDetailFields } from '../../constants';

class PatientDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      isEditMode: false
    };
  }

  render() {
    const { modal, closeModal, patient } = this.props;
    return (
      modal === "patientDetails" &&
      <Modal closeModal={closeModal}>
        <div className="App-modal">
          <div className="App-modal-header">
            <h2>
              Patient Details
            </h2>
          </div>
          <div className="App-modal-body">
            {
              patientDetailFields.map(field => {
                const value = field.parseFunc ? field.parseFunc(patient) : patient[field.field];
                return (
                  <div>
                    <div>{field.name}</div>
                    <div key={field.name}>{value}</div>
                  </div>
                );
              })
            }
          </div>
          <div className="App-modal-footer">
            <button className="App-button">Edit</button>
            <button className="App-button">Delete</button>
            <button className="App-button">Save</button>
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.ui.modal,
  patient: state.entities.patient,
});

export default connect(mapStateToProps, {
  closeModal
})(PatientDetails);