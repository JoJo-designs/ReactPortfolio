import React from 'react';
import Featured from './featured';
import '../styles/portfolio.css'

//images are 400 x 458 ish check later.
const portfoilo = [
    {
        imageId: 1,
        image: "./images/img8.jpg",
        alt: "Weather app",
        a: "https://jojo-designs.github.io/weatherApp/",
    },
    {
        imageId: 2,
        image: "./images/img7.jpg",
        alt: "pet finder app",
        a: "https://jojo-designs.github.io/The-Ultimate-Personality-Pet-Finder/",
    },
    {
        imageId: 3,
        image: "./images/img9.jpg",
        alt: "app that can generate a strong password",
        a: "https://jojo-designs.github.io/securePasswordGenerator/",
    },
    {
        imageId: 4,
        image: "./images/img10.jpg",
        alt: "app",
        a: "https://jojo-designs.github.io/calanderApp/",
    },
    {
        imageId: 5,
        image: "./images/img11.jpg",
        alt: "app that will allow people to keep track of the work day by hour.",
        a: "https://jodinotetaker.herokuapp.com/",
    },
    {
        imageId: 6,
        image: "./images/img12.jpg",
        alt: "ottawa sport field booking app",
        a: "https://lit-spire-78703.herokuapp.com/",
    },
    {
        imageId: 7,
        image: "./images/img15.jpg",
        alt: "fitness tracker app",
        a: "https://cool-fitness.herokuapp.com/",
    },
    {
        imageId: 8,
        image: "./images/img17.jpg",
        alt: "A Tech Dashboard app",
        a: "https://super-tech-dashboard.herokuapp.com/",
    },
]

export default function Portfolio() {
    return (
        <div className="inner">
            <div className="featured"><Featured /></div>
            <div className="flexing">
                {portfoilo.map((project) => (
               <a className="linkflex" key={project.imageId} href={project.a}><img src={project.image} alt={project.alt} className="imgGrid"></img></a> 
            ))}
            </div>
        </div>
    )
}