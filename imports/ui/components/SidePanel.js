import React from 'react';
import {
  Col, Row,
  Navbar,NavbarBrand,
  CardBlock
} from 'reactstrap';

const SidePanelHeader = (props) => (
  <header>
    <Navbar  className="flex-row align-items-center" light>
      <NavbarBrand>{props.title ? props.title : "SidePanel"}</NavbarBrand>
      <div onClick={props.close}
        className="pointer ml-auto">
        <i className="fa fa-times text-sm-muted"></i>
      </div>
    </Navbar>

  </header>
)

const SidePanel = class SidePanel extends React.Component {
  render() {
    const props = this.props;
    return (
      <Col xs={this.props.size} className={"Panel SidePanel "+props.className}>
        <div>
          {(()=>{
            if(props.header) {
              return <SidePanelHeader {...props} />
            }
          })()}
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
