import React from 'react';
import Featured from './featured';
import { SocialIcon } from 'react-social-icons';
import '../styles/portfolio.css'

//images are 400 x 458 ish check later.
const portfoilo = [
    {
        imageId: 1,
        image: "./images/img8.jpg",
        alt: "Weather app",
        a: "https://jojo-designs.github.io/weatherApp/",
        gitA: "https://github.com/JoJo-designs/weatherApp",
    },
    {
        imageId: 2,
        image: "./images/img7.jpg",
        alt: "pet finder app",
        a: "https://jojo-designs.github.io/The-Ultimate-Personality-Pet-Finder/",
        gitA: "https://github.com/JoJo-designs/The-Ultimate-Personality-Pet-Finder",
    },
    {
        imageId: 3,
        image: "./images/img9.jpg",
        alt: "app that can generate a strong password",
        a: "https://jojo-designs.github.io/securePasswordGenerator/",
        gitA: "https://github.com/JoJo-designs/securePasswordGenerator",
    },
    {
        imageId: 4,
        image: "./images/img10.jpg",
        alt: "app",
        a: "https://jojo-designs.github.io/calanderApp/",
        gitA: "https://github.com/JoJo-designs/calanderApp",
    },
    {
        imageId: 5,
        image: "./images/img11.jpg",
        alt: "app that will allow people to keep track of the work day by hour.",
        a: "https://jodinotetaker.herokuapp.com/",
        gitA: "https://github.com/JoJo-designs/note-Tracker",
    },
    {
        imageId: 6,
        image: "./images/img12.jpg",
        alt: "ottawa sport field booking app",
        a: "https://lit-spire-78703.herokuapp.com/",
        gitA: "https://github.com/FieldBookingSystem/FieldBookingSystem",
    },
    {
        imageId: 7,
        image: "./images/img15.jpg",
        alt: "fitness tracker app",
        a: "https://cool-fitness.herokuapp.com/",
        gitA: "https://github.com/JoJo-designs/fitnessTracker",
    },
    {
        imageId: 8,
        image: "./images/img17.jpg",
        alt: "A Tech Dashboard app",
        a: "https://super-tech-dashboard.herokuapp.com/",
        gitA: "https://github.com/JoJo-designs/tech-dashboard",
    },
]

export default function Portfolio() {
    return (
        <div className="inner">
            <div className="featured"><Featured /></div>
            <div className="flexing">
                {portfoilo.map((project) => (
              <div className="linkflex"> <a key={project.imageId} href={project.a}>
                   <img src={project.image} alt={project.alt} className="imgGrid"></img>
                   </a> 
                   <div className="overLap"><SocialIcon url={project.gitA} bgColor="none" fgColor="rgb(209, 88, 88)"/></div>
                </div>
            ))}
            </div>
        </div>
    )
}