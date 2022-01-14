import React from 'react';
import colour from "./image/design1.jpg"


const design = [
    {
        imageID: 1,
        image: colour,
        alt: "colour book cover",
        href: "https://jojo-designs.github.io/portfoilo_helper/project1.html",
    },
]

export default function Design() {
    return (
        <div className="inner">
            <div className="flexing">
                {design.map((project) => (
                    <div className="linkflex">
                        <a key={project.imageID} href={project.href} target="_blank">
                            <img src={project.image} alt={project.alt}></img>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}