import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar } from "@components/index";
import { Home, About, Projects, ProjectDetail, Art } from "@pages/index";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(prev => !prev);
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
      </Switch>
    </Router>
  );
}

export default App;
