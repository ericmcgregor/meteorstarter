// Import server startup through a single index entry point

import './fixtures.js';
import './register-api.js';

import '/imports/db/Links'
import '/imports/db/Exposures'

import {migrate, autoMigrate} from 'meteor/herteby:denormalize'
autoMigrate() //should be called last in your server code, after all caches have been declared
