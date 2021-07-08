import React from 'react';
import AboutMe from './aboutme';
import Feature from './features';


export default function Nav() {
    // gonna use this to build view all components for now since 
    // I'm not sure how to navigate.
    return (
        <section>
          <nav>
            <h3>About Me</h3>
            <h3>Portfolio</h3>
            <h3>Contact</h3>
            <h3>Resume</h3>
          </nav> 
          <div>
            <AboutMe />
            <Feature />
          </div>
          </section>
          
    );
}