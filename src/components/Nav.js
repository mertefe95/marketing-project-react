import React from "react";
import TailwindCSS from "../assets/tailwind.css";


function Nav() {
    return (
    <nav className="nav flex justify-around items-center pt-10">
        <div className="logo">
            <h2>Kek</h2>
        </div>

        <ul className="nav-links flex">
            <li className="px-2">Overview</li>
            <li className="px-2">Pricing</li>
            <li className="px-2">Help</li>
        </ul>

    </nav>
);
}


export default Nav;