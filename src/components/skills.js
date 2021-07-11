import React from 'react';

const skills = [
    {
        skillID: 1,
        skill: "HTML"
    },
    {
        skillID: 2,
        skill: "CSS"
    },
    {
        skillID: 3,
        skill: "React"
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