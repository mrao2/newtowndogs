import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Components/Navbar/Navbar";
import BlogDetails from "./Components/pages/Blog/BlogDetails";
import NotFound from "./NotFound";
import BlogHome from "./Components/pages/Blog/BlogHome";
import Homepage from "./Components/pages/Homepage/Homepage";
import Login from "./Components/pages/Login";
import BookingPage from "./Components/pages/BookingPage/BookingPage";
import Profile from "./Components/pages/Profile";
import AboutUs from "./Components/pages/AboutUs/AboutUs";
import CommentList from "./Components/pages/Blog/CommentList";
import AppSubmitted from "./Components/pages/BookingPage/AppSubmitted";
import AppointmentDisplay from "./Components/pages/AppointmentDisplay/AppointmentDisplay";
import AppointmentList from "./Components/pages/AppointmentDisplay/AppointmentList";
import CreateBlog from "./Components/pages/Blog/CreateBlog";
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
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/aboutus">
              <AboutUs />
            </Route>
            <Route exact path="/BlogHome">
              <BlogHome />
            </Route>
            <Route exact path="/create">
              <CreateBlog />
            </Route>
            <Route exact path="/blogs/:BlogId">
              <BlogDetails />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/comments/:BlogId">
              <CommentList />
            </Route>
            <Route exact path="/BookingPage">
              <BookingPage />
            </Route>
            <Route exact path="/AppSubmitted">
              <AppSubmitted />
            </Route>
            <Route exact path="/AppointmentDisplay">
              <AppointmentDisplay />
              <Route />
              <Route path="/appointments/:appointment_id">
                <AppointmentList />
              </Route>
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
