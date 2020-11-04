import React from "react";
import "../assets/tailwind.css";

function Contact() {
return (
<div className="contact-div">
    <div className="contact-upper flex flex-col justify-center items-center">
        <h2>Contact Sales</h2>
        <p>Hello this is a dummy text.</p>
    </div>

    <div className="contact-middle">
        <form className="contact-form flex flex-col justify-center items-center">
            <span className="flex flex-col justify-center items-center">
            <label htmlFor="first-name">First name</label>
            <input id="first-name" className="border border-solid rounded-md leading-6 py-2 px-3 ease-in-out"></input>
            
            <label htmlFor="last-name">Last name</label>
            <input id="last-name" className="border border-solid rounded-md leading-6 py-2 px-3 ease-in-out"></input>
            </span>

            <span className="flex flex-col justify-center items-center">
            <label htmlFor="company">Company</label>
            <input id="company" className="border border-solid rounded-md leading-6 py-2 px-3 ease-in-out"></input>

            <label htmlFor="email">Email</label>
            <input id="email" className="border border-solid rounded-md leading-6 py-2 px-3 ease-in-out"></input>

            <label htmlFor="phone-number">Phone Number</label>
            <input id="phone-number" className="border border-solid rounded-md leading-6 py-2 px-3 ease-in-out"></input>
            </span>

            <label htmlFor="text-area">Message</label>
            <textarea id="text-area" className="border border-solid rounded-md leading-6 py-2 px-3 ease-in-out"></textarea>

        </form>
    </div>

    <div className="contact-below flex flex-col justify-center items-center">
        <span>By selecting this, you agree to the <a className="underline">Privacy Policy</a> and <a className="underline">Cookie Policy</a></span>
        <button className="bg-indigo-700">Let's talk</button>
    </div>



</div>
    );
}

export default Contact;