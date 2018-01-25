import * as React from 'react';

class Logo extends React.Component {
  render() {
    return (
      <img src={require('../../assets/logo.png')} alt="Logo"/>
    );
  }
}

export default Logo;
