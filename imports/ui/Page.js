import React from 'react';
import {Meteor} from 'meteor/meteor';
import DefaultLayout from '/imports/ui/Layouts/DefaultLayout';
import DefaultNav from '/imports/ui/defaultComponents/DefaultNav';

import { Container, Row, Col } from 'reactstrap';



const Page = class Page extends React.Component {
  render() {
    if(this.props.loading) {return <div className="container">loading...</div>}
    return (
      <div id="container-window">
        <DefaultNav />
        <DefaultLayout {...this.props}/>
      </div>
    )
  }
}

export default Page;
