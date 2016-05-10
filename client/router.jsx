import React from 'react';
import {mount} from 'react-mounter';

FlowRouter.route('/', {
    action: function(params, queryParams) {
        mount(Layout, {content: null});
    }
});
