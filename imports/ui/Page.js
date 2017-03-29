import React from 'react';
import {Meteor} from 'meteor/meteor';

const Page = class Page extends React.Component {
  render() {
    console.log(this.props.Data)
    return (
      <div className="container">
        page
      </div>
    )
  }
}

export default Page;
