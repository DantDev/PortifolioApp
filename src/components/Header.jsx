import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header>
            <Link to="/" className="site-logo">Portifolio</Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
            </nav>
        </header>
    )
}