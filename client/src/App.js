import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Account from './components/pages/Account';
import Hero from './components/Hero';
// Import the useAuthTokenStore hook.
import { useAuthTokenStore } from "./utils/auth";

const App = () =>
  // Use the hook to reauthenticate stored tokens.
  useAuthTokenStore();
  <div>
    <HashRouter>
      <Nav />
      <Hero />
      <div>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/account'} component={Account} />
        </Switch>
      </div>
      <Footer />
    </HashRouter>
  </div>;

export default App;
