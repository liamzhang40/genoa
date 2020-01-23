import React from 'react';
import { connect } from 'react-redux';
import { fetchPhysician } from '../../actions/physician_actions';

class ProfileTile extends React.Component {
  componentDidMount() {
    if (!this.props.physician) {
      this.props.fetchPhysician(this.props.data.physician_id);
    }
  }

  render() {
    const { physician } = this.props;

    return (
      <div className="App-profile-tile">
        {
          physician &&
          <div>
            <img src={`${physician.profile}`}></img>
            <div>{physician.name}</div>
            <div>Specialty: {physician.specialty}</div>
            <div>Education: {physician.education}</div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  physician: state.entities.physicians[ownProps.data.physician_id]
});

export default connect(mapStateToProps, {
  fetchPhysician
})(ProfileTile);
