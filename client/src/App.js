import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Account from './components/pages/Account';
import Recipe from './components/pages/Recipe'
import Hero from './components/Hero';
import Logo from './components/Logo';
import GuestRoute from './components/GuestRoute';
// Import the useAuthTokenStore hook.
import { useAuthTokenStore, useIsAuthenticated } from "./utils/auth";

const App = () => {

  const isAuthenticated = useIsAuthenticated();
  // Use the hook to reauthenticate stored tokens.
  useAuthTokenStore();
  return (

    <div>
      <HashRouter>
        <Nav />
        <Hero />
        <Logo />
        <div>
          <Switch>
            
          <Route exact path='/' component={Home} />
          <GuestRoute exact path='/account' redirectTo="/" component={Account} />
          </Switch>

          {/* <Route exact path={'/recipe'} component={Recipe} /> */}

          {/* <Switch>
          <GuestRoute exact path='/account' redirectTo="/" component={Account} />
          <Route exact path='/account' component={Account} />
          </Switch> */}
        </div>
        <Footer />
      </HashRouter>
    </div>
  )


}
export default App;
