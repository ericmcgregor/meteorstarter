import React from 'react';
import {
  Col, Row,
  Navbar,NavbarBrand,
  CardBlock
} from 'reactstrap';

const SidePanel = class SidePanel extends React.Component {
  render() {
    return (
      <Col xs={this.props.size} className="Panel SidePanel">
        <div>
        <header>
          <Navbar  className="flex-row align-items-center" light>
            <NavbarBrand>SidePanel</NavbarBrand>
            <div onClick={this.props.close}
              className="pointer ml-auto">
              <i className="fa fa-times text-sm-muted"></i>
            </div>
          </Navbar>

        </header>
        <main>
            {this.props.children}
        </main>
        </div>
      </Col>
    )
  }
}

SidePanel.defaultProps = {
  size:2
}

export default SidePanel;
