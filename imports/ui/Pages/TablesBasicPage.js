import React from 'react';
import {Meteor} from 'meteor/meteor';
import DefaultTableComponent from '/imports/ui/defaultComponents/DefaultTableComponent'
import DefaultTableActions from '/imports/ui/defaultComponents/DefaultTableActions'

const TablesBasicLayout = (props) => (
  <div>

    <DefaultTableActions title="Basic Table" {...props} />
    <DefaultTableComponent {...props} />
  </div>
)

export default TablesBasicLayout;
