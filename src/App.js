import React from 'react';
import LoginPage from './components/LogIn';
import SignUp from './components/SignUp';
import OTP from './components/OTP';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Experiment from './components/Experiment';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Signup" component={SignUp} />
          <Route path="/Login" component={LoginPage} />
          <Route path="/OTP" component={OTP} />
          <Route path="/" component={Home} />
          {/* <Route path="/" component={Experiment} /> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;