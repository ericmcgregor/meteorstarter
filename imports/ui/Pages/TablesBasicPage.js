import React from 'react';
import {Meteor} from 'meteor/meteor';
import DefaultTableComponent from '/imports/ui/defaultComponents/DefaultTableComponent'
import DefaultTableActions from '/imports/ui/defaultComponents/DefaultTableActions'
import {CardBlock} from 'reactstrap';
const TablesBasicPage = (props) => (
  <CardBlock>

    <DefaultTableActions title="Basic Table" {...props} />
    <DefaultTableComponent {...props} />
  </CardBlock>
)

export default TablesBasicPage;
