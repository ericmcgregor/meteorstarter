import React from 'react';
import {mount} from 'react-mounter';

FlowRouter.route('/', {
    action: function(params, queryParams) {
        mount(Foo, {name: 'Arunoda'});
    }
});
