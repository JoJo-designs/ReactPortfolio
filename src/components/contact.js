import React, { useState } from 'react';
import ContactData from './contactdata';
import '../styles/contact.css'

import { validateEmail } from '../utils/helper';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [errorMessage, setError] = useState('');

    const handleChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
          } else if (inputType === 'name') {
            setName(inputValue);
          } else {
            setText(inputValue);
          }
        };
    
    const handleform = (event) => {
        event.preventDefault();
        console.log("working")

        if (name.length === 0) {
            setError('Please enter a name');
            console.log(errorMessage)
            return;
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email')
            console.log(errorMessage)
            return;
        }
        if (text.length === 0) {
            setError('Please add a message')
            return;
        }
        setName('')
        setEmail('')
        setText('')
        setError('')
    }

    return (
        <div className="inner">
            <form className="fifty">
                <h4>Contact Me</h4>
                <input 
                placeholder="Name"
                value={name}
                name="name"
                type="text"
                onChange={handleChange}
                />
                <input placeholder="Email"
                value={email}
                name="email"
                type="text"
                onChange={handleChange}
                />
                <textarea placeholder="Your message here"
                value={text}
                name="text"
                type="text"
                onChange={handleChange}
                />
                {errorMessage && (
                    <p className="error">{errorMessage}</p>
                )}
                <button className="submit" onClick={handleform}> submit </button>
           </form>
           <div className="forty"><ContactData /></div>
        </div>
    )
}