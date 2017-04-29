import React from 'react';
import {
  Col
} from 'reactstrap';

const SidePanel = class SidePanel extends React.Component {
  render() {
    return (
      <Col xs={3} className="Panel SidePanel">
        <div  className="btn btn-primary" onClick={this.props.close}>
        SidePanel test
        </div>
      </Col>
    )
  }
}

export default SidePanel;
