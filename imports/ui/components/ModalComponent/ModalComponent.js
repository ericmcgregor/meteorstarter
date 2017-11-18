import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'reactstrap';
import store from "/imports/redux/store"
import {connect} from "react-redux"
import * as modalActions from '/imports/redux/modal/modalActions'




@connect((store) => {
  return {
    'modal': store.modal,
  };
})
class ModalComponent extends Component {
  closeModal(){
    store.dispatch(modalActions.closeModal())
  }
  render() {
    return (
      <Modal size={this.props.modal.size} isOpen={this.props.modal.open} toggle={this.closeModal} className={this.props.className}>
        {this.props.modal.modalComponent}
      </Modal>
    );
  }
}

ModalComponent.propTypes = {};
ModalComponent.defaultProps = {};

export default ModalComponent;
