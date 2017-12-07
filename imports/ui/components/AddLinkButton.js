import React, {Component} from 'react';
import PropTypes from 'prop-types';

import store from "/imports/redux/store"
import {connect} from "react-redux"
import {Button} from "reactstrap/lib/index";

@connect((store) => {
  return {
    'links.updating': store.links.updating
  };
})
class AddLinkButton extends Component {
  insertLink(){
    // store.dispatch(DefaultActions.insert({title:'new link', url:'url'}))
  }
  render() {
    return (
      <div>
      <Button onClick={this.insertLink}>add</Button>
      {
        this.props['links.updating'] ?
          <span>updating...</span>
          :
          null
      }
      </div>
    );
  }
}

AddLinkButton.propTypes = {};
AddLinkButton.defaultProps = {};

export default AddLinkButton;
