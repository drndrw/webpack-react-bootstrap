const anchor = document.getElementById('app');
import React from "react";
import ReactDOM from "react-dom";
import BrowserRouter from "react-router-dom";

const Navigation = () => {
  return <ul>
          <li>Home</li>
          <li>About</li>
        </ul>;
};

const App () => {
  return <div>
          <Navigation />
          <h1>Sup bois</h1>
        </div>;
};

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), anchor)
