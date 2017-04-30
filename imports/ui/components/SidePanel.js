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
        <header>
          <Navbar className="sidebar-header p-0" light>
              <Row noGutters>
                <Col className="pb-0 p-2">
                  <NavbarBrand>SidePanel</NavbarBrand>
                </Col>
                <div onClick={this.props.close}
                  className="pointer px-3 ml-auto d-flex align-items-center">
                  <i className="fa fa-times text-sm-muted"></i>
                </div>
              </Row>
          </Navbar>
        </header>
        <main>
            {this.props.children}
        </main>
      </Col>
    )
  }
}

SidePanel.defaultProps = {
  size:2
}

export default SidePanel;
