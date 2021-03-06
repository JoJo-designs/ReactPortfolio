import React from 'react';

const education = [
    {
        schoolID: 1,
        school: "Carleton University",
        course: "Full Stack Web Development, Certificate",
        years: "2021"
    },
    {
        schoolID: 2,
        school: "Durham College",
        course: "Graphic Design, Ontario Advanced Diploma",
        years: "2017 - 2020"
    },
    
]

export default function Education() {
    return (
        <div>
            <h3 className="listblock">Education</h3>
            {education.map((school) => (
               <p key={school.schoolID}>{school.school} {school.course}, {school.years}</p> 
            ))}
        </div>
    )
}