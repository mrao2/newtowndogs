import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img
        src="https://cdn.stocksnap.io/img-thumbs/960w/husky-animal_RZL1A2KF5X.jpg"
        alt="husky"
      />
      <h3>NewtownDogs</h3>

      <div className="links">
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <Link to="/aboutus">About Us</Link>
        <Link to="/Login">Log in</Link>

        <Link to="/BookingPage">Book Sitter</Link>
        <Link to="/bloghome">Blog</Link>
      </div>
      <div class="smallScreenNav">
        <div className="dropdown">
          <button class="dropbtn">Navigate the Website</button>
          <div class="dropdown-content">
            <div className="links">
              <a href="/">Home</a>
              <a href="/profile">Profile</a>
              <a href="/about">About Us</a>
              <Link to="/Login">Login</Link>
              <Link to="/BookingPage">Book Sitter</Link>
              <Link to="/bloghome">Blog</Link>

              <Link to="/create">New Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
