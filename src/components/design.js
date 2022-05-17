import React from 'react';
import '../styles/portfolio.css';
import colour from "./image/design1.jpg";
import decora from "./image/design2.jpg";
import exhibition from "./image/design3.jpg"
import tokyo from "./image/img23.jpg"
import monster from "./image/img24.jpg"
import nintendo from "./image/img47.jpg"


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
        alt: "Poster for Decora a paint and home decor store",
        href: "https://jojo-designs.github.io/portfoilo_helper/project2.html",
    },
    {
        imageID: 3,
        image: exhibition,
        alt: "A poster for a museum exhibit about nenaderthals",
        href: "https://jojo-designs.github.io/portfoilo_helper/project3.html",
    },
    {
        imageID: 4,
        image: monster,
        alt: "A flash card about folklore monsters",
        href: "https://jojo-designs.github.io/portfoilo_helper/project4.html",
    },
    {
        imageID: 5,
        image: tokyo,
        alt: "The cover for a travel guide for tokyo.",
        href: "https://jojo-designs.github.io/portfoilo_helper/project5.html",
    },
    {
        imageID: 6,
        image: nintendo,
        alt: "nintendo luxury stationary set",
        href: "https://jojo-designs.github.io/portfoilo_helper/project6.html",
    },
]

export default function Design() {
    return (
        <div className="inner">
            <div className="flexing">
                {design.map((project) => (
                    <div className="linkflex les">
                        <a key={project.imageID} href={project.href} target="_blank">
                            <img src={project.image} alt={project.alt} className="imgGrid"></img>
                        </a>
                    </div>
                ))}
            </div>
            <div className="videoDiv">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/JsYNm-2cJn0" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}