import React from 'react';
import {
  Col, Row,
  Navbar,NavbarBrand,
  CardBlock
} from 'reactstrap';
const OffCanvas = class OffCanvas extends React.Component {
  render() {
    if(!this.props.isOpen) return null;
    return (
      <Col xs={this.props.size} className="Panel-right offCanvas">
        <header>
          <Navbar className="sidebar-header p-0" light>
              <Row noGutters>
                <Col className="pb-0 p-2">
                  <NavbarBrand>OffCanvas</NavbarBrand>
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
OffCanvas.defaultProps = {
  size:4
}

export default OffCanvas;
