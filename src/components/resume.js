import React from 'react';
import '../styles/resume.css'
import Skills from './skills';
// import Jobs from './jobs'
// import Education from './eduaction'

export default function Resume() {
    return (
        <div className="resumeblock">
        <div>
           <h2>Jodi Ladouceur</h2>
           <h3>Full Stack Web Developer | Graphic Designer </h3>
            <Skills />
            {/* <h3>Experience</h3>
            <Jobs />
            <h3>Education</h3>
            <Education /> */}
        </div>
        </div>
    )
}