import React from 'react';
import {Meteor} from 'meteor/meteor';
import { Button, ButtonGroup, Container, Row, Col} from 'reactstrap';

const DefaultTableActions = class DefaultTableActions extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFilters = this.toggleFilters.bind(this)
    this.togglePagination = this.togglePagination.bind(this)
    this.Store = this.props.Store;
  }
  add() {
    Meteor.call('getData')
  }
  toggleFilters(){
    let tableOptions = this.Store.get('tableOptions');
    if(!tableOptions) {
      tableOptions = {
        showFilters:false
      }
    }
    tableOptions.showFilters = !tableOptions.showFilters;
    this.Store.set('tableOptions', tableOptions);
  }
  togglePagination(){
    let tableOptions = this.Store.get('tableOptions');
    if(!tableOptions) {
      tableOptions = {
        showPagination:false
      }
    }
    tableOptions.showPagination = !tableOptions.showPagination;
    this.Store.set('tableOptions', tableOptions);
  }
  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-end" noGutters={true}>
          <Col xs="auto" className="mr-auto">
            {this.props.title ? this.props.title : "Table Title"}
          </Col>
          <Col xs="auto">
            <Button className="mr-2" size="sm" onClick={this.add}>Add Data</Button>

            <ButtonGroup size="sm">
              <Button>
                <i className="fa fa-window-minimize" onClick={this.togglePagination}></i>
              </Button>
              <Button>
                <i className="fa fa-filter" onClick={this.toggleFilters}></i>
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

// {this.props.Collection.simpleSchema.getDefinition('type').allowedValues.map((item, i)=>{
//   return <option key={i} value={item}>{item}</option>
// })}

export default DefaultTableActions;
