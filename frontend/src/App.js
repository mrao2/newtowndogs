import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Components/pages/Blog/Create";
import BlogDetails from "./Components/pages/Blog/BlogDetails";
import NotFound from "./NotFound";
import BlogHome from "./Components/pages/Blog/BlogHome";
import Homepage from "./Components/pages/Homepage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/BlogHome">
              <BlogHome />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
