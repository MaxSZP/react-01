import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/Main/App';
import Account from './containers/Account';
import registerServiceWorker from './registerServiceWorker';
// import routes from './routes';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/tovar/:id" component={Account}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
