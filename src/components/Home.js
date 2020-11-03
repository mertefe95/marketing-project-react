import React from 'react';
import TailwindCSS from "../assets/tailwind.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faSms } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab)





function Home() {
return (
<div className="main">

<div className="live-demo-div">
    <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold text-black sm:text-4xl sm:leading-10">
            <span className="block">Followups.co</span>
            
        </h2>
        <p className="mt-4 text-lg leading-6 text-grey">Improve customer's call experience by giving them an option to receive a text that starts a1-to-1live-chat session with an operator.</p>
        <a href="#" className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-700 hover:text-indigo-500 hover:bg-indigo-50 transition duration-150 ease-in-out sm:w-auto">
        Live Demo
        </a>
    </div>
</div>


<div className="five-minutes-div">
    <h2 className="text-center text-2xl leading-2 font-bold text-black sm:text-4xl sm:leading-10">In 5-minutes, get a phone number that supports a phone-to-chat offering</h2>

    <div className="py-12 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                </div>
                <div className="mt-5">
                <h5 className="text-lg leading-6 font-medium text-gray-900">We hate long time on hold</h5>
                <p className="mt-2 text-base leading-6 text-gray-500">
                    Customers want to solve their problems quickly. What they don't want is to spend 11 minutes on average without getting agent's reply.
                </p>
                <p className="mt-2 text-base leading-6 text-gray-500">
                    According to survey. 53% of people will stay on hold for 5 minutes or less, which shows how businesses risk losing their customers  making them wait so long.
                </p>
                </div>
                </div>
                <div className="mt-10 lg:mt-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                </div>
                <div className="mt-5">
                <h5 className="text-lg leading-6 font-medium text-gray-900">Ever been bounced from an agent to agent?</h5>
                <p className="mt-2 text-base leading-6 text-gray-500">
                    Inaccessible customer service is bad. But being endlessly transferred between different agents is even worse for the customer. While the need to repeat the same information over 
                    and over drives the customer mad, the chances of leaving them satisfied dwindle.
                </p>
                </div>
                </div>
                <div className="mt-10 lg:mt-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                </div>
                <div className="mt-5">
                <h5 className="text-lg leading-6 font-medium text-gray-900">"Your Call is important to us"</h5>
                <p className="mt-2 text-base leading-6 text-gray-500">
                    If the call is important, a customer should not have to wait for over 30 minutes where it has a potential to be dropped.
                </p>
            </div>
        </div>
        </div>
    </div>
</div>
</div>


    <div className="bg-gray-500 mt-10 pb-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div className="text-center">
            <h2 className="pt-8  text-center text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-3xl">
                30,000 + companies are delivering<br/> conversational experiences with Followups
            </h2>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Read customer stories <i> </i>
                    </a>
                </div>
            </div>
        </div>
    </div> 


    <div className="director-div flex xl:px-64">
        <div className="flex flex-col justify-around items-center xl:px-64">
            <p className="pt-8 text-center text-xl xl:text-left  tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-3xl">Followups gives us a <span className="director-span">single tool</span> that lets us sell to and support users through every step of the funnel.</p>
            <p><strong>Jason Mills,</strong> Director of Sales and Success</p>
        </div>
        <div className="bg-indigo-700">
            <img src="./images/man-pic.png"  />       
        </div>
    </div>


    <div className="how-it-works-container xl:px-64">
        <div className="how-it-works flex flex-col justify-evenly items-center px-4">
            <h2 className="pt-8 text-center text-4xl lg:pb-8 tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-3xl">
                Here's how it works
            </h2>
            <p className="text-center text-lg lg:pb-8">When a user dials in to the number we provide you,<br/> they will be asked:</p>
        </div>

        <div className="flex flex-col justify-center items-center md:px-36 md:flex-row px-4 py-4 ">
            <div className="flex md:px-20">
                <div className="mr-2"><FontAwesomeIcon className="text-3xl bg-indigo-500  " icon={faSms}/></div>
            <div classNName="pl-4">
                <h3 className="font-bold text-lg">Press 1 to receive a text</h3>
                <p className="text-base">Dear will immediately receive an SMS text that tells you how long it will take to receive call back.</p>
            </div>
        </div>

        <div className="flex"> 
            <div className="mr-2"><FontAwesomeIcon className="text-3xl bg-indigo-500 font-bold" icon={faSms}/></div>
            <div className="">
                <h3 className="font-bold text-lg">Press 2 to receive a text</h3>
                <p className="text-base">Dear will immediately receive an SMS text that tells you how long it will take to receive call back.</p>
            </div>
        </div>
        </div>

        <div className="btn text-center pt-4">
        <span class="inline-flex rounded-md shadow-sm">
            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                Get Started (30-days free trial)
            </button>
        </span>
        </div>
    
    </div>
    </div>
);
}


export default Home;
