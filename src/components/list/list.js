import React from 'react';
import { connect } from 'react-redux';
import { fetchAppointments } from '../../actions/appointment_actions';
import './list.scss';
import { columns } from '../../constants';
import ListItems from './listItems';

class List extends React.Component {
  componentDidMount() {
    this.props.fetchAppointments();
  }

  render() {
    const tableHeadRows = <tr>
      {columns.map((column, idx) => {
        return (
          <th key={idx}>{column.name}</th>
        );
      })}
    </tr>;

    return (
      <div className="App-list">
        <table className="App-table">
          <thead>
            {tableHeadRows}
          </thead>
          <tbody>
            <ListItems 
              rows={this.props.appointments}
              columns={columns}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appointments: state.entities.appointments,
});

export default connect(mapStateToProps, {
  fetchAppointments
})(List);