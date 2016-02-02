import React from 'react';
import {
    IndexRoute, Route
}
from 'react-router';

import HomePage from './HomePage';
import Root from './Root';

export default ( < Route path = "/"
    component = {
        Root
    } >
    < IndexRoute component = {
        HomePage
    }
    /> < /Route >
);
