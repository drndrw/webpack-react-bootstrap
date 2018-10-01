const anchor = document.getElementById('app');
import React from "react";
import ReactDOM from "react-dom";
import {Switch, Route, BrowserRouter, browserHistory, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => (
  <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
        </ul>
);

const App = () => (
  <div>
          <Navigation />
          <Main />
        </div>
);

const Home = () => (
  <h1>Sup broh. Welcome to my page</h1>
);

const About = () => (
  <h1>About me!!</h1>
);

const NotFound = () => (
  <h1>404 - not found...</h1>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route component={NotFound} />
    </Switch>
  </main>);


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), anchor)
