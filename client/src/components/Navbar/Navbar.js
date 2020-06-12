import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import "./style.css"

const createLink = ({ text, to, ...rest }) => {
  const className = "nav-link";
  if (to) {
    return (
      <Link className={className} to={to} {...rest}>
        {text}
      </Link>
    );
  }
  return (
    <span
      role="button"
      className={className}
      style={{ cursor: "pointer" }}
      {...rest}
    >
      {text}
    </span>
  );
};

function NavLinks() {
  const { isLoggedIn, logout } = useAuth();
  const links = [];
  if (isLoggedIn) {
    links.push({ text: "Home", to: "/home" });
    links.push({ text: "About", to: "/about" });
    links.push({ text: "Sports Leagues and CLasses", to: "/classes" });
    links.push({ text: "Plans and Pricing", to: "/plans" });
    links.push({ text: "Shop", to: "/shop" });
    links.push({ text: "Perks", to: "/perks" });
    links.push({ text: "My Account", to: "/profile" });
    links.push({ text: "Logout", onClick: () => logout() });
  } else {
    links.push({ text: "Home", to: "/home" });
    links.push({ text: "About", to: "/about" });
    links.push({ text: "Sports Leagues and CLasses", to: "/classes" });
    links.push({ text: "Plans and Pricing", to: "/plans" });
    links.push({ text: "Shop", to: "/shop" });
    links.push({ text: "Perks", to: "/perks" });
    links.push({ text: "Signup", to: "/signup" });
    links.push({ text: "Login", to: "/login" });
  }
  return (
    <ul className="navbar-nav">
      {links.map((link, i) => (
        <li key={i} className="nav-item">
          {createLink(link)}
        </li>
      ))}
    </ul>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark custom-background">
      <div className="container">
        <Link className="navbar-brand" to="/homepage">
          Global Games California
        </Link>
        <NavLinks />
      </div>
    </nav>
  );
}

export default Navbar;
