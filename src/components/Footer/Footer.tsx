import * as React from 'react';

class Footer extends React.Component {
  render() {
    return <footer>Copyright My Application {new Date().getFullYear()}</footer>;
  }
}

export default Footer;
