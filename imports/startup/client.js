import './routes'
import Tether from 'Tether';

import Data from '/imports/api/Data'

window.Tether = Tether;

require ('bootstrap/dist/js/bootstrap.js');
import 'react-table/react-table.css'

window.subscription = Meteor.subscribe('data');
window.Data = Data;
