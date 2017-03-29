import React from 'react';
import {Meteor} from 'meteor/meteor';
import {DefaultComponent} from '/imports/ui/components/DefaultComponent'
const Page = class Page extends React.Component {
  render() {
    if(this.props.loading) {return <div className="container">loading...</div>}
    console.log(this.props.Data)
    return (
      <div className="container">
        <DefaultComponent />
      </div>
    )
  }
}

export default Page;
