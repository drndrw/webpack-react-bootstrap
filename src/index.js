const Navigo = require('navigo');
const root = null;
const useHash = true;
const hash = '#';
const router = new Navigo(root, useHash, hash);
const anchor = document.getElementById('app');
import React from "react";
import ReactDOM from "react-dom";

const Navigation = () => {
  return <ul>
          <li>Home</li>
          <li>About</li>
        </ul>;
};

router.on(() => {
  document.title = 'Index | DaRe';
  ReactDOM.render(<h2>Welcome to DaRe page</h2>, anchor);
});

router.on({
  'about': () => {
    document.title = 'About | DaRe';
    ReactDOM.render(<h2>Das about page</h2>, anchor);
  },
  'portfolio': () => {
    document.title = 'Portfolio | DaRe';
    ReactDOM.render(<div>Portfolio</div>, anchor);
  },
  'react': () => {
    document.title = 'React | DaRe';
    const Index = () => {
      return <div>
              <Navigation />
              <h1>Hey dude</h1>
              <p>Welcome to my sick react page</p>
            </div>;
    };
    ReactDOM.render(<Index />, anchor);
  }
});

router.notFound((query) => {
  anchor.innerHTML = '<h1>404</h1>';
  document.title = '404 | DaRe';
  document.body.appendChild(anchor);
});

router.resolve();
