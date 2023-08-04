import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Newtown Dogs!</h1>
      <img
        src="https://cdn.stocksnap.io/img-thumbs/960w/husky-animal_34ZZVPMCM2.jpg"
        alt="sleeping husky"
      />
      <div className="links">
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <Link to="/aboutus">About Us</Link>
        <Link to="/Login">Sign Up</Link>

        <Link to="/BookingPage">Book Sitter</Link>
        <Link to="/bloghome">Blog</Link>

        <Link to="/create">New Blog</Link>
      </div>
      <div class="smallScreenNav">
        <div className="dropdown">
          <button class="dropbtn">Navigate the Website</button>
          <div class="dropdown-content">
            <div className="links">
              <a href="/">Home</a>
              <a href="/profile">Profile</a>
              <a href="/about">About Us</a>
              <Link to="/Login">Sign Up</Link>
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
