import React, {Component} from 'react';

import { Links } from '/imports/api/links/links'
import { createContainer } from 'meteor/react-meteor-data';

import store from "/imports/redux/store"
import {connect} from "react-redux"
import * as linksActions from '/imports/redux/actions/linksActions'

export const ListComponent = createContainer((props)=>{
  let subscription = Meteor.subscribe('links.all');
  let LinksList = [];

  if(subscription.ready()==true) {
    LinksList = Links.find().fetch();
  }
  return {
    ...props,
    LinksList
  }
}, (props)=>{
  return (
    <div>
      <LinksList {...props} />
    </div>
  )
})


  @connect((store) => {
    return {
      'links.updating': store.links.updating
    };
  })
  class LinksList extends Component {
  render() {
    const props = this.props
    return (
      <div>
        {
          props['links.updating'] ?
            <div>Updating!</div>
            : null
        }
        <ul>
          {
            props.LinksList.map((item, i)=>{
              return (<li key={i} onClick={store.dispatch.bind(this, linksActions.removeLink(item._id))}>{item.title}</li>)
            })
          }
        </ul>
      </div>
    );
  }
}

