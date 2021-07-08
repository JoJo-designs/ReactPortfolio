import React from 'react';

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
]



export default function Portfolio() {
    return (
        <div>
            {portfoilo.map((project) => (
                <img key={project.imageId} src={project.image} alt={project.alt}></img>
            ))}
        </div>
    )
}