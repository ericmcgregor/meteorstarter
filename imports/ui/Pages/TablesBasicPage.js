import React from 'react';
import {Meteor} from 'meteor/meteor';
import DefaultTableComponent from '/imports/ui/defaultComponents/DefaultTableComponent'
import DefaultTableActions from '/imports/ui/defaultComponents/DefaultTableActions'

const TablesBasicPage = (props) => (
  <div>

    <DefaultTableActions title="Basic Table" {...props} />
    <DefaultTableComponent {...props} />
  </div>
)

export default TablesBasicPage;
