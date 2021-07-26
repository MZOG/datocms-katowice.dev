import React from "react";
import { Link } from "gatsby";
import Container from "./container";

export default function Header() {
  return (
    <header>
      <Container>
        <div className="logo">
          <Link to="/">katowice.dev</Link>
        </div>

        <nav>
          <div className="nav-button">menu</div>
        </nav>
      </Container>
    </header>
  );
}
