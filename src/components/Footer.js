import React from "react";
import TailwindCSS from "../assets/tailwind.css";

function Footer() {
return (
<footer class="bg-white">
    <div class="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden space-y-8 sm:px-6 lg:px-8">
        <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
            <div class="px-5 py-2">
                <a href="#" class="text-base font-extrabold leading-6 text-gray-500 hover:text-gray-900">
                Terms
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#" class="text-base font-extrabold leading-6 text-gray-500 hover:text-gray-900">
                Privacy Policy
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#" class="text-base font-extrabold leading-6 text-gray-500 hover:text-gray-900">
                EULA
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#" class="text-base font-extrabold leading-6 text-gray-500 hover:text-gray-900">
                Release Notes
                </a>
            </div>
        </nav>
    
    
    <p class="mt-8 text-center text-base leading-6 text-gray-600">
        &copy; 2020 Followups.co, Inc. All rights reserved.
    </p>
  </div>
</footer>
    );
}

export default Footer;