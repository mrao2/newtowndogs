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
          Sign In
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
