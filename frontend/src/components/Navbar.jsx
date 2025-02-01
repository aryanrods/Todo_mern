import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="Navbar-wrapper">
        <div className="Navbar-logo">
          <h3>TODO</h3>
        </div>

        <div className="Navbar-button">
          <ul>
            <li>
              <Link
                className="nav-links"
                to="/"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="nav-links"
                to="/about"
                style={{ textDecoration: "none" }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="nav-links"
                to="/signup"
                style={{ textDecoration: "none" }}
              >
                Sign up
              </Link>
            </li>
            <li>
              <Link
                className="nav-links"
                to="/signin"
                style={{ textDecoration: "none" }}
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                className="nav-links"
                to=""
                style={{ textDecoration: "none" }}
              >
                Log out
              </Link>
            </li>
            <li>
              <Link
                className="nav-links"
                to="/profile"
                style={{ textDecoration: "none" }}
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .nav-links:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
