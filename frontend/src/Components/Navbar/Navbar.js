
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Newtown Dogs!</h1>
      <div className="links">
        <a
          href="/"
        >
          Home
        </a>
        <a
          href="/about"
        >
          About Us
        </a>
        <a
          href="/create"
        >
          <Link to="/Login">Sign Up</Link>
        </a>
        <Link
          to="/BookingPage"
        >
          Book Sitter
        </Link>
        <Link to="/bloghome">Blog</Link>

        <Link
          to="/create"
        >
          New Blog
        </Link>

      </div>

      <div class="smallScreenNav">
        <div className="dropdown">
          <button class="dropbtn">Navigate the Website</button>
          <div class="dropdown-content">
            <div className="links">
              <a
                href="/"
              >
                Home
              </a>
              <a
                href="/about"
              >
                About Us
              </a>
              <a
                href="/create"
              >
                <Link to="/Login">Sign Up</Link>
              </a>
              <Link
                to="/BookingPage"
              >
                Book Sitter
              </Link>
              <Link to="/bloghome">Blog</Link>

              <Link
                to="/create"
              >
                New Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
