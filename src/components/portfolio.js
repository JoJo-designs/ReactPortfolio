import React from 'react';
import Featured from './featured';
import '../styles/portfolio.css'

//images are 400 x 450 ish check later.
const portfoilo = [
    {
        imageId: 1,
        image: "./images/img13.png",
        alt: "app",
        a: "#",
    },
    {
        imageId: 2,
        image: "./images/img13.png",
        alt: "app",
        a: "#",
    },
    {
        imageId: 3,
        image: "./images/img13.png",
        alt: "app",
        a: "#",
    },
    {
        imageId: 4,
        image: "./images/img13.png",
        alt: "app",
        a: "#",
    },
    {
        imageId: 5,
        image: "./images/img13.png",
        alt: "app",
        a: "#",
    },
    {
        imageId: 6,
        image: "./images/img13.png",
        alt: "app",
        a: "#",
    },
    {
        imageId: 7,
        image: "./images/img13.png",
        alt: "app",
        a: "#",
    },
    {
        imageId: 8,
        image: "./images/img13.png",
        alt: "app",
        a: "#",
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