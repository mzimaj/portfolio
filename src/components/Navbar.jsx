import { NavLink } from "react-router-dom";

const navigationLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <NavLink to="/" className="logo" aria-label="Go to homepage">
          MZ
        </NavLink>

        <nav aria-label="Main navigation">
          <ul className="nav-links">
            {navigationLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  end={link.path === "/"}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;