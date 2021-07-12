import React from 'react';
import AboutImage from './aboutimage';
import '../styles/about.css'


export default function AboutMe() {
    return (
        <div className="inner">
            {/* I will put an image here it will have its own component */}
            <div className="forty"><AboutImage /></div>
            <aside className="sixty">
            <h2>About me</h2>
            <h3>Full Stack web development & Graphic Designer</h3>
            <p>this is some text about me and why people should hire me I guess. Lorem Ipsum is simply dummy
                 text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                 dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                 it to make a type specimen book. It has survived not only five centuries, but also the leap 
                 into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                 with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
                 desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>this is some text about me and why people should hire me I guess. Lorem Ipsum is simply dummy
                 text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                 dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                 it to make a type specimen book. It has survived not only five centuries, but also the leap 
                 into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                 with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
                 desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            </aside>
        </div>
    )
}