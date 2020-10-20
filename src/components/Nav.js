import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RealWhiteLogo from "../assets/images/real-white-logo.png";
import TailwindCSS from  "../assets/tailwind.css";
library.add(fab)

function Nav() {

return(
<nav className="nav bg-black h-40 flex sm:justify-evenly">       
    <div className="logo-container md:pl-8">
        <Zoom>
        <a href="/"><img className="h-full py-4 pl-20 sm:pl-12 sm:pr-0" src={RealWhiteLogo}/></a>
        </Zoom> 
    </div>   

    <div className="menu-links-icons font-inter flex text-white items-center pl-64 sm:justify-start sm:pt-12 sm:flex-col sm:pl-0 sm:pr-28 sm:w-5/6 md:flex-col md:pl-32 md:pt-12 xxl:pr-12 ">       
            <Zoom>
            <ul className="links flex uppercase text-sm font-semibold px-10 sm:pl-0 sm:pr-20">
                <li className="px-4"><a href="/menu">Menu</a></li>
                <li className="px-4"><a href="/about">About</a></li>
            </ul>
            </Zoom>            

            <ul className="icons flex font-semibold text-xl sm:pl-0 sm:pr-20 sm:pt-4 md:pt-4">
                <li className="px-4"><a href="#"><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li className="px-4"><a href="#"><FontAwesomeIcon icon={faYelp}/></a></li>
                <li className="px-4"><a href="#"><FontAwesomeIcon icon={faFacebookF}/></a></li>
            </ul>
    </div>
</nav>

);
}


export default Nav;
