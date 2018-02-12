import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class View extends React.Component {
  render() {
    return (
      <section>
        <Helmet title="Error!" />
        <h1>Error</h1>
        <p>Unfortunately, that page cannot be found.</p>
        <p>
          <Link to="/">Go back home</Link>.
        </p>
      </section>
    );
  }
}

export default View;
