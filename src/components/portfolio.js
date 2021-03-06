import React from 'react';
import Featured from './featured';
import { SocialIcon } from 'react-social-icons';
import '../styles/portfolio.css'
import code from "./image/code_800x550.jpg"
import pets from "./image/pet_800x550.jpg"
import password from "./image/password_800x550.jpg"
import work from "./image/workday_800x550.jpg"
import note from "./image/note_800x550.jpg"
import tech from "./image/tech_800x550.jpg"


//images are 400 x 458 ish check later.
const portfoilo = [
    {
        imageId: 1,
        image: code,
        alt: "Code Quiz app",
        a: "https://jojo-designs.github.io/SuperCodeQuiz/",
        gitA: "https://github.com/JoJo-designs/SuperCodeQuiz",
    },
    {
        imageId: 2,
        image: pets,
        alt: "pet finder app",
        a: "https://jojo-designs.github.io/The-Ultimate-Personality-Pet-Finder/",
        gitA: "https://github.com/JoJo-designs/The-Ultimate-Personality-Pet-Finder",
    },
    {
        imageId: 3,
        image: password,
        alt: "app that can generate a strong password",
        a: "https://jojo-designs.github.io/securePasswordGenerator/",
        gitA: "https://github.com/JoJo-designs/securePasswordGenerator",
    },
    {
        imageId: 4,
        image: work,
        alt: "app",
        a: "https://jojo-designs.github.io/calanderApp/",
        gitA: "https://github.com/JoJo-designs/calanderApp",
    },
    {
        imageId: 5,
        image: note,
        alt: "app that will allow people to keep track of the work day by hour.",
        a: "https://jodinotetaker.herokuapp.com/",
        gitA: "https://github.com/JoJo-designs/note-Tracker",
    },
    {
        imageId: 6,
        image: tech,
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
              <div className="linkflex"> <a key={project.imageId} href={project.a} target="_blank">
                   <img src={project.image} alt={project.alt} className="imgGrid"></img>
                   </a> 
                   <div className="overLap"><SocialIcon url={project.gitA} bgColor="none" fgColor="rgb(209, 88, 88)" target="_blank"/></div>
                </div>
            ))}
            </div>
            <div className="videoDiv add10">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/uvIHrGorxNg" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
             encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             <div className="overLap"><SocialIcon url={"https://github.com/JoJo-designs/e-commerce_backend"} bgColor="none" fgColor="rgb(209, 88, 88)"/></div>
            </div>
        </div>
    )
}