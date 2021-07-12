import React from 'react';
import '../styles/resume.css'
import Skills from './skills';
import Jobs from './jobs'
import Education from './eduaction'

export default function Resume() {
    return (
        <div className="resumeblock">
        <div>
            <a href="resumé.pdf" download><p className="download">Download a PDF of my resumé</p></a>
           <h2>Jodi Ladouceur</h2>
           <h3>Full Stack Web Developer | Graphic Designer </h3>
            <Skills />
            <Jobs />
            <Education />
        </div>
        </div>
    )
}