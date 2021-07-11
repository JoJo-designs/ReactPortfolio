import React from 'react';
import ContactData from './contactdata';
import '../styles/contact.css'

export default function Contact() {
    return (
        <div className="inner">
            <form className="fifty">
                <h2>this contact</h2>
                <input placeholder="Name"></input>
                <input placeholder="Email"></input>
                <textarea placeholder="Your message here"></textarea>
                <div className="submit"> submit </div>
           </form>
           <div className="forty"><ContactData /></div>
        </div>
    )
}