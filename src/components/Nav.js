import React from "react";
import Tailwind from "../assets/tailwind.css";

function Nav() {
    return(
        <nav className="nav bg-white text-black flex items-center justify-between px-4">

            <div className=""> <img src="./images/smartwatch-transparent.png" className="object-cover" /></div>

            <ul className="flex flex-col md:flex-row">
                <li className="md:px-4"><a href="#">HOMEPAGE</a></li>
                <li className="md:px-4"><a href="#">FEATURES</a></li>
                <li className="md:px-4"><a href="#">CONTACT US</a></li>
            </ul>

        </nav>

        
    );

}

export default Nav;