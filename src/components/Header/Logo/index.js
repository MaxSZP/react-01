import React from 'react';
import { Router } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Logo extends React.Component {

  render() {
    return (
      <div className={'header-logo'}>
        React APP LOGO
      </div>
    );
  }
}

export default withRouter(Logo);