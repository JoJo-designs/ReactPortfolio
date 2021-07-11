import React from 'react';
import Featured from './featured';
import '../styles/portfolio.css'


const portfoilo = [
    {
        imageId: 1,
        image: "./images/img8.jpg",
        alt: "app",
        a: "#",
    },
    {
        imageId: 2,
        image: "./images/img8.jpg",
        alt: "app",
        a: "#",
    },
    {
        imageId: 3,
        image: "./images/img8.jpg",
        alt: "app",
        a: "#",
    },
    {
        imageId: 4,
        image: "./images/img8.jpg",
        alt: "app",
        a: "#",
    },
    {
        imageId: 5,
        image: "./images/img8.jpg",
        alt: "app",
        a: "#",
    },
    {
        imageId: 6,
        image: "./images/img8.jpg",
        alt: "app",
        a: "#",
    },
    {
        imageId: 7,
        image: "./images/img8.jpg",
        alt: "app",
        a: "#",
    },
    {
        imageId: 8,
        image: "./images/img8.jpg",
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
               <a className="linkflex" href={project.a}><img key={project.imageId} src={project.image} alt={project.alt} className="imgGrid"></img></a> 
            ))}
            </div>
        </div>
    )
}