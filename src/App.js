import React from 'react';
import LoginPage from './components/LogIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/Signup" component={SignUp} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;