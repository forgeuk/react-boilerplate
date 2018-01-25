import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { Heading } from '../components';

class View extends React.Component {
  render() {
    return (
      <section>
        <Helmet title="Example" />
        <Heading>Example Page</Heading>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quaerat necessitatibus, dolorem distinctio ducimus expedita
          nam corporis nesciunt at culpa adipisci dolor et qui enim
          exercitationem nulla voluptatum maiores inventore explicabo?
        </p>
        <Heading className="heading--grey">Another Heading</Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Cupiditate possimus veniam pariatur voluptas, amet tempore
          aspernatur, perspiciatis harum distinctio blanditiis hic rerum
          dicta quis dolorum, officia error soluta consectetur similique.
        </p>
        <p>
          <Link to="/">Go back home</Link>.
        </p>
      </section>
    );
  }
}

export default View;
