import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as modalActions from '/imports/redux/modal/modalActions'
import store from "/imports/redux/store"

const Modalbody = (props) => {
  return (
    <div>
      <ModalHeader >Modal title</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ModalBody>
      <ModalFooter>
        <Button color="primary" >Do Something</Button>{' '}
        <Button color="secondary">Cancel</Button>
      </ModalFooter>
    </div>
  )
}

export const TriggerModalButton = class TriggerModalButton extends Component {
  modal(){
    store.dispatch(modalActions.openModal({modalComponent:<Modalbody />}))
  }
  render() {
    return (
      <Button onClick={this.modal}>Open Modal</Button>
    );
  }
}

TriggerModalButton.propTypes = {};
TriggerModalButton.defaultProps = {};

