import React from 'react';
import {Meteor} from 'meteor/meteor';

const DefaultComponent = class DefaultComponent extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        default component
      </div>
    )
  }
}

DefaultComponent.defaultProps = {

}

export {DefaultComponent};
