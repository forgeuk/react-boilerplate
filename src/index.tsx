import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import views from './views';
import './scss/style.scss';

import { Footer } from './components';

render(
  <>
    <Helmet titleTemplate={`%s | My Application`} />
    <BrowserRouter>
      <Switch>
        {views.map((view, index) => (
          <Route
            key={index}
            path={view.path}
            component={view.component}
            exact
          />
        ))}
      </Switch>
    </BrowserRouter>
    <Footer />
  </>,
  document.getElementById('app'),
);
