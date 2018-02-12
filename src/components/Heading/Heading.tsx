import * as React from 'react';

interface Props {
  children: JSX.Element | string;
  className?: string;
}

class Heading extends React.Component<Props> {
  render() {
    return (
      <h1
        className={`heading ${
          this.props.className !== undefined ? this.props.className : ''
        }`}
      >
        {this.props.children}
      </h1>
    );
  }
}

export default Heading;
