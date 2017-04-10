import React from 'react';
import {Meteor} from 'meteor/meteor';
import { Button, Popover, PopoverTitle, PopoverContent,
Modal, ModalHeader, ModalBody, ModalFooter,
Form, FormGroup, Label, Input, FormText,
Container, Row, Col} from 'reactstrap';

const DefaultTableActions = class DefaultTableActions extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this)
    this.find = this.find.bind(this)
  }
  update(e){
    this.props.Store.set("search", e.target.value)
  }
  find(e){
    let result = {type:e.target.value};
    if(!e.target.value) result = {};
    this.props.Store.set("find", result)
  }
  render() {
    return (
      <Row noGutters={true}>
        <Col xs="4">
          <Input
            type="text"
            name="find"
            id="exampleEmail"
            placeholder="search by title"
            onChange={this.update.bind(this)}
            />
        </Col>
        <Col></Col>
        <Col xs="2">
          <Input type="select" name="select" id="exampleSelect" onChange={this.find.bind(this)}>
          <option value={""}>all types</option>
          {this.props.Collection.schema.getDefinition('type').allowedValues.map((item, i)=>{
            return <option key={i} value={item}>{item}</option>
          })}
        </Input>
        </Col>
      </Row>
    )
  }
}

export default DefaultTableActions;
