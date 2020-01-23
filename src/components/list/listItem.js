import React from 'react';
import ProfileTile from './profileTile';

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHover: false
    };

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(boolean) {
    this.setState({
      isHover: boolean
    });
  }

  render() {
    return (
      <td className="App-relative" onMouseEnter={() => this.handleHover(true)} onMouseLeave={() => this.handleHover(false)}>
        <span>{this.props.cellValue}</span>
        {
          this.state.isHover &&
          <ProfileTile data={this.props.data}/>
        }
      </td>
    );
  }
}

export default ListItem;