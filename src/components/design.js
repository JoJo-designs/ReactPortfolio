import React from 'react';
import colour from "./image/design1.jpg"

const design = [
    {
        imageID: 1,
        image: colour,
        alt: "colour book cover"
    },
]

export default function Design() {
    return (
        <div className="inner">
            <h1>This is the Graphic Deign Part</h1>
            <div className="flexing">
            {design.map((projects) => (
                <div className="linkflex"> <a key={projects.imageID} href="https://github.com/JoJo-designs/note-Tracker" target="_blank">
                    <img src={projects.image} alt={projects.alt} className="imgGrid"></img>
                    </a>
                    </div>
            ))}
                  
            </div>
        </div>
    )
}