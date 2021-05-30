import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import "./scss/custom.scss";
import "./scss/global.scss";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import MyWork from "./pages/MyWork/MyWork";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <nav className="navigation">
          <NavLink to="/">
            <div className="anchorLogo">
              <h1 className="brand">Mathias Portfolio</h1>
            </div>
          </NavLink>
        </nav>
        <div className="menu">
          <div>
            <NavLink to="/mywork">
              <h2 className="navtext">
                My Work <i className="fas fa-angle-right"></i>
              </h2>
            </NavLink>
          </div>
          <div>
            <NavLink to="/about">
            <h2 className="navtext">
              About <i className="fas fa-angle-right"></i>
            </h2>
            </NavLink>
          </div>
          <div>
            <NavLink to="/contact">
              <h2 className="navtext">
                Contact <i className="fas fa-angle-right"></i>
              </h2>
            </NavLink>
          </div>
        </div>

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/mywork">
            <MyWork />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>


        <Footer/>
      </Router>

    </>
  );
}

export default App;
