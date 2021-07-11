import React from 'react';
import Featured from './featured';
import '../styles/portfolio.css'


const portfoilo = [
    {
        imageId: "1",
        image: "./images/img8.jpg",
        alt: "app",
    },
    {
        imageId: "2",
        image: "./images/img8.jpg",
        alt: "app",
    },
    {
        imageId: "3",
        image: "./images/img8.jpg",
        alt: "app",
    },
    {
        imageId: "4",
        image: "./images/img8.jpg",
        alt: "app",
    },
    {
        imageId: "4",
        image: "./images/img8.jpg",
        alt: "app",
    },
    {
        imageId: "4",
        image: "./images/img8.jpg",
        alt: "app",
    },
    {
        imageId: "4",
        image: "./images/img8.jpg",
        alt: "app",
    },
    {
        imageId: "4",
        image: "./images/img8.jpg",
        alt: "app",
    },
]

export default function Portfolio() {
    return (
        <div className="inner">
            <div className="featured"><Featured /></div>
            {portfoilo.map((project) => (
                <img key={project.imageId} src={project.image} alt={project.alt} className="imgGrid"></img>
            ))}
        </div>
    )
}