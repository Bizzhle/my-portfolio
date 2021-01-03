import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home"
import Resume from "./components/Resume"
import Project from "./components/Project"
import SinglePost from "./components/SinglePost"
import Blog from "./components/Blog"
// import Navbar from "./components/Navbar"
import React from 'react';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Resume} path="/resume" />
            <Route component={Project} path="/project" />
            <Route component={SinglePost} path="/post/:slug" />
            <Route component={Blog} path="/blog" />
            
        </Switch>
    </BrowserRouter>
  );
}

export default App;
