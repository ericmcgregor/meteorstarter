import React from 'react';
import {Meteor} from 'meteor/meteor';
import {
  ListGroup, ListGroupItem, Badge
} from 'reactstrap';

const SideNavBar = class SideNavBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      model:{}
    }
  }
  render() {
    return (
      <div>
        <ListGroup>
          <ListGroupItem
            action
            tag="a"
            href="#"
            className="justify-content-between">
            Basic Table <Badge pill>14</Badge>
          </ListGroupItem>
          <ListGroupItem
            action
            tag="a"
            href="#"
            className="justify-content-between">
            Pivot Table <Badge pill>2</Badge>
          </ListGroupItem>
          <ListGroupItem
            action
            tag="a"
            href="#"
            className="justify-content-between">
            Morbi leo risus <Badge pill>1</Badge>
          </ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

SideNavBar.defaultProps = {

}

export default SideNavBar;
