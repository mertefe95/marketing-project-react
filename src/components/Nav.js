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
<header className="nav bg-black h-40 flex sm:relative">       
    <div className="logo-container md:ml-8 sm:absolute sm:h-40">
        <Zoom>
        <a href="/"><img className="h-full py-4 pl-20 sm:pl-0 sm:pr-54" src={RealWhiteLogo}/></a>
        </Zoom> 
    </div>   

    <nav className="menu-links-icons font-inter flex text-white items-center pl-64 sm:pt-12 sm:flex-col sm:ml-16 sm:pl-0 sm:pr-0 sm:mr-10 sm:w-5/6 md:flex-col md:pl-32 md:pt-12 xxl:pr-12 ">       
            <Zoom>
            <ul className="links flex uppercase text-sm font-semibold px-10 sm:pl-0 sm:pr-0">
                <li className="px-4"><a href="/menu">Menu</a></li>
                <li className="px-4"><a href="/about">About</a></li>
            </ul>
            </Zoom>            

            <ul className="icons flex font-semibold text-xl sm:pl-0 sm:pr-0 sm:pt-4 md:pt-4">
                <li className="px-4"><a href="#"><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li className="px-4"><a href="#"><FontAwesomeIcon icon={faYelp}/></a></li>
                <li className="px-4"><a href="#"><FontAwesomeIcon icon={faFacebookF}/></a></li>
            </ul>
    </nav>
</header>

);
}


export default Nav;
