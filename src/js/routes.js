import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import ExampleAdmin from './containers/ExampleAdmin';
import NotFound from './containers/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ExampleAdmin} />
    <Route path="/**" component={NotFound} />
  </Route>
);
