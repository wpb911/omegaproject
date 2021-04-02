import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/pages/Home';
//import Account from './components/pages/Login';
import Recipe from './components/pages/Recipe'
import Hero from './components/Hero';
import Logo from './components/Logo';
import Login from './components/pages/Login'
import GuestRoute from './components/GuestRoute'
// Import the useAuthTokenStore hook.
import { useAuthTokenStore } from "./utils/auth";

const App = () =>
  // Use the hook to reauthenticate stored tokens.
  // useAuthTokenStore();
  <div>
    <Router>
      <Nav />
      <Hero />
      <Logo />
      <div>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/recipe'} component={Recipe} />
          <GuestRoute exact path='/login' redirectTo="/" component={Login} />
        </Switch>
      </div>
      <Footer />
    </Router>
  </div>;

export default App;
