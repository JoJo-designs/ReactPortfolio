import React from 'react';
import '../styles/portfolio.css';
import colour from "./image/design1.jpg";
import decora from "./image/design2.jpg";
import exhibition from "./image/design3.jpg"



const design = [
    {
        imageID: 1,
        image: colour,
        alt: "colour book cover",
        href: "https://jojo-designs.github.io/portfoilo_helper/project1.html",
    },
    {
        imageID: 2,
        image: decora,
        alt: "colour book cover",
        href: "https://jojo-designs.github.io/portfoilo_helper/project2.html",
    },
    {
        imageID: 3,
        image: exhibition,
        alt: "colour book cover",
        href: "https://jojo-designs.github.io/portfoilo_helper/project3.html",
    },
]

export default function Design() {
    return (
        <div className="inner">
            <div className="flexing">
                {design.map((project) => (
                    <div className="linkflex">
                        <a key={project.imageID} href={project.href} target="_blank">
                            <img src={project.image} alt={project.alt} className="imgGrid"></img>
                        </a>
                    </div>
                ))}
            </div>
            <div className="videoDiv">
            <iframe width="900" height="500" src="https://www.youtube.com/embed/JsYNm-2cJn0" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}