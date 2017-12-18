import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StyledText, Form, Text, TextArea, Radio, RadioGroup, Select, Checkbox } from 'react-form';
import {Button, FormGroup, Input, Label} from "reactstrap";

//https://react-form.js.org

const errorValidator = (values) => {
  return {
    firstName: !values.firstName ? "Input must contain something, stupid" : null
  };
};

const warningValidator = (values) => {
  return {
    firstName: !values.firstName ||
    values.firstName.length < 2 ? "Input not long enough dummy" : null
  };
};

const successValidator = (values) => {
  return {
    firstName: values.firstName &&
    values.firstName.length > 2 ? "Thanks for entering a name" : null
  };
};

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
      validateWarning={warningValidator}
      validateSuccess={successValidator}
      validateError={errorValidator}
      dontValidateOnMount={true}
      >
        { formApi => {
          return (
            <form onSubmit={formApi.submitForm} id="form2">
              
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <StyledText field="firstName" id="firstName" className={"form-control"} />
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
