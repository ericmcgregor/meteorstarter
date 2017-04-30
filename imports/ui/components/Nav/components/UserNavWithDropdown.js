import React from 'react';
import {
  UncontrolledNavDropdown,
  DropdownToggle, DropdownMenu, DropdownItem,Dropdown,
  Row, Col
 } from 'reactstrap';


const UserNavWithDropdown = (props) => {
  return (
    <UncontrolledNavDropdown>
      <DropdownToggle nav caret>
        <small>Username: Role</small>
      </DropdownToggle>
      <DropdownMenu right={props.right}>
        <Row noGutters>
          <Col xs={6}>
            test
          </Col>
          <Col xs={6}>
            test
          </Col>
        </Row>
        <div>
          test
        </div>
      </DropdownMenu>
    </UncontrolledNavDropdown>
  )
}
UserNavWithDropdown.defaultProps = {
  right:true
}
export default UserNavWithDropdown;
