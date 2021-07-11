import React from 'react';
import ContactData from './contactdata';
// import '../styles/contact.css'
// somthing broke the image in the contact css.

export default function Contact() {
    return (
        <div className="innercontact">
            <form className="fifty">
                <h2>this contact</h2>
                <input placeholder="Name"></input>
                <input placeholder="Email"></input>
                <textarea placeholder="Your message here"></textarea>
                <button> submit </button>
           </form>
           <div className="forty"></div><ContactData /><div>
           </div>
        </div>
    )
}