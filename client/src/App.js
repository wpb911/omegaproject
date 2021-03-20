import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Account from './components/pages/Account';
import Hero from './components/Hero';

const App = () =>
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
