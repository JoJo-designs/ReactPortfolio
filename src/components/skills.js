import React from 'react';

const skills = [
    {
        skillID: 1,
        skill: "HTML, CSS, Javascript, bootstrap and jQuery"
    },
    {
        skillID: 2,
        skill: "Node.js and Npm"
    },
    {
        skillID: 3,
        skill: "MySQL, NoSQL and Express"
    },
    {
        skillID: 4,
        skill: "Handlebars.js and React.js"
    },
    {
        skillID: 5,
        skill: "Adobe Creative Cloud. Illustrator, Photoshop, InDesign, After Effects and Premier Pro "
    },
    {
        skillID: 6,
        skill: "Organizational and Time Management Skills"
    },
    {
        skillID: 7,
        skill: "Leadership and cooperation"
    },
]

export default function Skills() {
    return (
        <div>
            <h3 className="listblock">My Skills</h3>
            <ul>
            {skills.map((skill) => (
               <li key={skill.skillID} className="list">{skill.skill}</li> 
            ))}
            </ul>
        </div>
    )
}