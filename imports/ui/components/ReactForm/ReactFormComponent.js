import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Form, Text, TextArea, Radio, RadioGroup, Select, Checkbox } from 'react-form';
import {Button, FormGroup, Input, Label} from "reactstrap";

const statusOptions = [
  {
    label: 'Single',
    value: 'single'
  },
  {
    label: 'In a Relationship',
    value: 'relationship'
  },
  {
    label: "It's Complicated",
    value: 'complicated'
  }
];


class ReactFormComponent extends Component {
  submitValues({ submittedValues }){
    console.log('submitvalues', submittedValues)
  }
  render() {
    return (
      <Form
      onSubmit={submittedValues => this.submitValues( { submittedValues } )}
      formDidUpdate={submittedValues => this.submitValues( { submittedValues } )}>
        { formApi => {
          return (
            <form onSubmit={formApi.submitForm} id="form2">
              
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <Text field="firstName" id="firstName" className={"form-control"} />
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <Text field="lastName" id="lastName" className={"form-control"} />
              </div>
              
              <div className="form-group">
                <RadioGroup field="gender" className={"form-control"} >
                  { group => (
                    <div>
                      <label htmlFor="male" className="mr-2">Male</label>
                      <Radio group={group} value="male" id="male" className="mr-3 d-inline-block" />
                      <label htmlFor="female" className="mr-2">Female</label>
                      <Radio group={group} value="female" id="female" className="d-inline-block" />
                    </div>
                  )}
                </RadioGroup>
              </div>
              
              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <TextArea field="bio" id="bio" className={"form-control"} />
              </div>
              
              <div className="form-group">
                <label htmlFor="authorize" className="mr-2">Authorize</label>
                <Checkbox field="authorize" id="authorize" className="d-inline-block" />
              </div>
              
              <div className="form-group">
                <label htmlFor="status" className="d-block">Relationship status</label>
                <Select field="status" id="status" options={statusOptions} className={"form-control"} />
              </div>

              <button type="submit" className="mb-4 btn btn-primary">Submit</button>
            </form>
        )}}
      </Form>
    );
  }
}

ReactFormComponent.propTypes = {};
ReactFormComponent.defaultProps = {};

export default ReactFormComponent;
