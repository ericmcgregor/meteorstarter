import React, {Component} from 'react';
import PropTypes from 'prop-types';

import * as linksActions from '/imports/redux/actions/linksActions'
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
    store.dispatch(linksActions.insertLink('new link'))
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
