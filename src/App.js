// import Header from './components/Header.js';
import Splash from "./components/Splash.js";
import Work from "./components/Work.js";
import About from "./components/About.js";
import "./App.css";
import logo from "./logo.svg";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/portfolio" id="logo">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <ul>
            <li>
              <a href="mailto:hello@johnlandon.design" class="email">
                hello@johnlandon.design
              </a>
            </li>
            <li>
              <Link to="/profile/work">WORK</Link>
            </li>
            <li>
              <Link to="/profile/about">ABOUT</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route path="/portfolio">
            <Splash />
          </Route>
          <Route path="/profile/work">
            <Work />
          </Route>
          <Route path="/profile/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
