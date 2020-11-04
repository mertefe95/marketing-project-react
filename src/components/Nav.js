import React from "react";
import Tailwind from "../assets/tailwind.css";

function Nav() {
    return(
        <nav className="nav h-24 bg-black text-white">
        
            <h2>Smart Watches Logo</h2>

            <ul>
                <li><a href="#">HOMEPAGE</a></li>
                <li><a href="#">FEATURES</a></li>
                <li><a href="#">CONTACT US</a></li>
            </ul>

        </nav>

    );

}

export default Nav;