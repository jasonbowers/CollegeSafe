import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import dotenv from "dotenv";

import Home from "./Routes/Home.js";
import About from "./Routes/About.js";
import Contact from "./Routes/Contact.js";
import NoMatch from "./Routes/NoMatch.js";

import Layout from "./Components/Layout/Layout.js";
import NavigationBar from "./Components/NavigationBar/NavigationBar.js";
import Jumbotron from "./Components/Jumbotron/Jumbotron.js";

dotenv.config();

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
