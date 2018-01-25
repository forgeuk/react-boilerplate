import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { Heading } from '../components';

class View extends React.Component {
  render() {
    return (
      <section>
        <Helmet title="Home" />
        <Heading>Welcome</Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Soluta suscipit natus temporibus neque. Ut ipsum earum
          dolorum reprehenderit consectetur sapiente, illo ab, similique
          maiores quam odio illum nam incidunt laboriosam.
        </p>
        <p>
          <Link to="/example">Take me to another page</Link>.
        </p>
        <p>
          <Link to="/example-error">Take me to page that doesn't exist</Link>.
        </p>
      </section>
    );
  }
}

export default View;
