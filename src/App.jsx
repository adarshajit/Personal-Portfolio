import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar } from "@components";
import { Home, About, Projects, ProjectDetail, Art } from "@pages";
// import Talks from "./Pages/TalksPage";
// import Fsdc from "./Pages/FSDC";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/projects/:Id" exact component={ProjectDetail} />
        <Route path="/art" exact component={Art} />
        {/* <Route path="/talks" exact component={Talks} />
        <Route path="/community" exact component={Fsdc} /> */}
      </Switch>
    </Router>
  );
}

export default App;
