const anchor = document.getElementById('app');
import React from "react";
import ReactDOM from "react-dom";
import {Switch, Route, BrowserRouter, browserHistory, Link} from "react-router-dom";
import 'bootstrap';
import './scss/app.scss';
import Navigation2 from './jsx/navigation';

const Navigation = () => (
  <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/portfolio'}>Portfolio</Link></li>
          <li><Link to={'/draw'}>Draw</Link></li>
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

const Portfolio = () => (
  <h2>Portfolio stuff</h2>
);

const About = () => (
  <h1>About me!!</h1>
);

const LetsDraw = () => (
  <div>
    <h1>Lets draw</h1>
    <svg width="580" height="400" xmlns="http://www.w3.org/2000/svg">
     <g>
      <title>background</title>
      <rect fill="#fff" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
      <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
       <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
      </g>
     </g>
     <g>
      <title>Layer 1</title>
      <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_1" y2="315.4375" x2="96" y1="49.4375" x1="108" stroke-width="1.5" stroke="#000" fill="none"/>
      <line stroke="#000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_2" y2="323.4375" x2="312.000004" y1="159.437492" x1="136" stroke-width="1.5" fill="none"/>
     </g>
    </svg>
  </div>
);

const NotFound = () => (
  <h1>404 - not found...</h1>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/draw' component={LetsDraw} />
      <Route component={NotFound} />
    </Switch>
  </main>);


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), anchor)
