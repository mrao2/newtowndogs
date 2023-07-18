import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Components/pages/Blog/Create";
import BlogDetails from "./Components/pages/Blog/BlogDetails";
import NotFound from "./NotFound";
import BlogHome from "./Components/pages/Blog/BlogHome";
import Homepage from "./Components/pages/Homepage";
import "./App.css";
import Login from "./Components/pages/Login";
import 'bootstrap/dist/css/bootstrap.css';


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
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
            <Route exact path="/bookAppointment">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
