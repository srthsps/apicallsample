import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home'
import Profile from './Profile'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/profile'} component={Profile} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
