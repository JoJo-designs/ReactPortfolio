import React from 'react';
import AboutImage from './aboutimage';

export default function AboutMe() {
    return (
        <div>
            {/* I will put an image here it will have its own component */}
            <AboutImage />
            <h2>About me</h2>
            <h3>this something | this is other thing</h3>
            <p>this is some text about me and why people should hire me I guess</p>
        </div>
    )
}