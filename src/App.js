import React from 'react';
//styles
import classNames from 'classnames';
import "./App.scss";
//router
import { Switch, Route, Redirect } from "react-router-dom";
//components
import Main from './components/main';

const App = () => {
  return (
    <div className="App">
      <aside></aside>
      <div className={classNames('body')}>
        <Switch>
          <Route path={'/'} exact={true} component={Main} />
          <Redirect to={'/'} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
