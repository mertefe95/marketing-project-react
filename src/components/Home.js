import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import RealWhiteLogo from "../assets/images/real-white-logo.png";
import MenuImage from "../assets/images/new-menu.jpg";
import Coffee1 from "../assets/images/coffee1.png";
import Coffee2 from "../assets/images/coffee2.png";
import Coffee3 from "../assets/images/coffee3.png";
import Tiger from "../assets/images/tigerz.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TailwindCSS from "../assets/tailwind.css";

function Home() {
return (
<main className="main">
    <div className="slider">

    </div>

    <div className="menu-container flex justify-center">
        <Zoom duration={2000}>
        <img className="menu h-screen" src={MenuImage}/>
        </Zoom>
    </div>

    <div className="order-ahead-container flex flex-col justify-center items-start pl-64 xxl:pl-48 md:pl-4 sm:items-center sm:pl-0">
            <ul className="md:pr-64 sm:pr-42 sm:pl-20">
                <li>
                    <Slide right>
                    <h2 className="order-ahead-header font.inter text-white tracking-widest font-semibold text-5xl md:text-3x1">ORDER AHEAD</h2>
                    </Slide>
                </li>

                <li>
                    <button className="order-ahead-btn font.din text-base mt-8 border-2 py-3 px-6 text-white outline-none md:text-sm">Now Available</button>
                </li>
            </ul>
    </div>

    <div className="three-images-container  ">

        <div className="three-images-upper-container flex justify-evenly items-center w-full">

            <div className="card xxl:pl-12 sm:pl-32">
                <Fade>
                <img className="first-image rounded-3xl" src={Coffee1} />
                </Fade>
            </div>

            <div className="card">      
                <Fade duration={2000} delay={300}>
                <img className="second-image p-16 sm:mr-24 rounded-3xl" src={Coffee2} />
                </Fade>
            </div>
        </div>
    
    
        <div className="three-images-lower-container flex items-center justify-center w-full font-din">

            <div className="card pb-16 mr-8 sm:mr-0 sm:pr-8 xl:w-2/5">
                <Fade duration={3000} delay={400}>           
                <img className="third-image rounded-3xl" src={Coffee3} />
                </Fade>   
            </div>

            <ul className="three-images-ul sm:mb-8">
                <li className="pb-6 sm:pb-2 text-lg sm:text-base">Follow us on social</li>
                <li className="sm:pb-12"><button className="border-2 tracking-wide px-5 py-3 bg-white cursor-pointer sm:text-sm">Instagram</button></li>
            </ul>          
        </div>
    </div>

    <div className="story-container text-white bg-black flex flex-col justify-center items-center ">
        <Fade>
        <ul className="story-ul font-din">
            <li className="text-2xl sm:px-12">HUG A MUG's story starts in the late 90s when boba was first introduced to the TR.</li>
            <li className="text-center pt-10"><button className="py-3 px-5 border-2 border-solid tracking-wide text-base">Our Story</button></li>
        </ul>
        </Fade>
    </div>

    <div className="tiger-container">
    </div>
</main>
);
}


export default Home;
