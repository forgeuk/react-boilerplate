import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { Heading, Logo } from '../components';

class View extends React.Component {
  render() {
    return (
      <section>
        <Helmet title="Home" />
        <Logo />
        <Heading>React Boilerplate</Heading>
        <p>
          Congratulations, you got the React Boilerplate running!
        </p>
        <p>
          <Link to="/example">Take me to another page</Link>.
        </p>
        <p>
          <Link to="/example-error">Take me to page that doesn't exist</Link>.
        </p>
        <p>
          <a href="https://git.digital-results.com/resources/react-boilerplate">
            View source code
          </a>.
        </p>
      </section>
    );
  }
}

export default View;
