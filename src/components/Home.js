import React from 'react';
import TailwindCSS from "../assets/tailwind.css";

function Home() {
return (
<div className="main">

<div className="">
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
    
</div>
);
}


export default Home;
