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
            <p>As a full-stack web developer and graphic designer, I have a unique
                set of skills that allow me to complete a project from beginning
                to end. I graduated graphic design from Durham college in 2020
                and later completed my certificate in full-stack web development
                from Carleton university in 2021. I Believe consistency in web
                and print help build recognizable brands. In the future, I am
                hoping that I can join a creative team where I can use a 
                little bit of everything.
            </p>
            <p>Outside of my career goals, I have a lot of interest. I enjoy creative
                endeavors such as drawing and playing guitar. I like to play video
                games, I like RPG and strategy games the best. I also enjoy slower-paced
                games and simulations like the story of seasons games or animal crossing.
                I sometimes play 2D-style fighting games but I’m not great at them. I also
                enjoy reading manga, I think my current favorite is Dr.Stone. I’m often
                listening to music when I am doing stuff but the type of music depends
                on the activity I am doing at the time. 
            </p>
            </aside>
        </div>
    )
}