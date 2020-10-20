import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import RealWhiteLogo from "../assets/images/real-white-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TailwindCSS from "../assets/tailwind.css";

function Footer() {
return (
<footer className="footer font-din bg-black text-white ">
    <div className="flex justify-center items-center pt-4 h-40 md:h-28 sm:pt-0">
        <Zoom> <img src={RealWhiteLogo} className="footer-image h-full" /> </Zoom>
    </div>

    <div className="footer-content flex justify-around items-center md:px-8 sm:px-0 sm:pb-8 sm:px-0 pb-10">
        <Zoom>
        <ul className="left-footer text-sm font-din">
            <li className="p-1 sm:p-0">HUG A MUG COFFEE SHOP</li>
            <li className="p-1 sm:p-0">DUATEPE, SAVAS STREET. NO: 2</li>
            <li className="p-1 mb-3 sm:p-0 sm:mb-0">34000 SISLI/ISTANBUL/TURKEY</li>
            <li className="p-1 sm:p-0">&copy; 2020 HUG A MUG COFFEE SHOP.</li>
            <li className="p-1 sm:p-0">Artwork by Mert</li> 
        </ul>
        </Zoom>

        <Zoom>
        <ul className="middle-footer text-center mr-16 sm:mr-0">
            <li className="text-lg my-4 sm:my-0 sm:text-base">Hours (updated hours due to COVID-19)</li>
            <li className="text-sm p-1 sm:p-0">Tuesday — Thursday</li>
            <li className="text-sm p-1 sm:p-0">11am — 8pm</li>
            <li className="text-sm p-1 sm:p-0">Friday — Sunday</li>
            <li className="text-sm p-1 sm:p-0">11am — 9pm</li>
            <li className="text-sm p-1 my-4 sm:p-0 sm:my:0">Closed on Monday</li>
        </ul>
        </Zoom>

        <Zoom>
        <ul className="right-footer underline text-right text-lg sm:text-sm">
            <li><a>Contact Us</a></li>
            <li><a>Careers</a></li>
            <li><a>Returns & Shipping</a></li>
            <li><a>Privacy Policy</a></li>
        </ul>
        </Zoom>
    </div>
</footer>
);
}

export default Footer;