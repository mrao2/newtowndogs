import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Navbar</h1>
      <div className="links">
        <a
          href="/"
          style={{
            color: "white",
          }}
        >
          Home
        </a>
        <a
          href="/about"
          style={{
            color: "white",
          }}
        >
          About Us
        </a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          <Link to="/Login">Sign Up</Link>
        </a>
        <Link
          to="/BookingPage"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Book Sitter
        </Link>
        <Link to="/bloghome">Blog</Link>

        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
