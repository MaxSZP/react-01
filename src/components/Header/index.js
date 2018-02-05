import React from 'react';
import { Router } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Logo from './Logo';

class Header extends React.Component {

  onClick = () => this.props.history.push({ pathname: '/tovar/123', params: { dfsdF: true } })
  
  render() {
    return (
      <header className={'header first-react-app'}>
          <Logo />
        <button onClick={this.onClick}>Go To Account</button>
      </header>
    );
  }
}

export default withRouter(Header);