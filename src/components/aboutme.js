import React from 'react';
import AboutImage from './aboutimage';
import '../styles/about.css'


export default function AboutMe() {
    return (
        <div className="inner">
            {/* I will put an image here it will have its own component */}
            <div className="forty"><AboutImage /></div>
            <aside className="sixty">
            <h2>About me</h2>
            <h3>Full Stack web development & Graphic Designer</h3>
            <p>As a graphic designer and full-stack developer, I have a unique set of skills that 
                allow me to work on a project from beginning to end.  I am interested in opportunities
                 where I can use a little bit of all these skills. I want to help build a creative 
                 world with other like-minded people. 
            </p>
            <p>Outside of design, I enjoy spending my doing creative things. I like to draw and play 
                guitar. I also enjoy reading manga and playing video games. 
            </p>
            </aside>
        </div>
    )
}