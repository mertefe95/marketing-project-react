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
            <span>
            <label htmlFor="first-name">First name</label>
            <input id="first-name"></input>

            <label htmlFor="last-name">Last name</label>
            <input id="last-name"></input>
            </span>

            <label htmlFor="company">Company</label>
            <input id="company"></input>

            <label htmlFor="email">Email</label>
            <input id="email"></input>

            <label htmlFor="phone-number">Phone Number</label>
            <input id="phone-number"></input>

            <label htmlFor="text-area">Message</label>
            <textarea id="text-area"></textarea>
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