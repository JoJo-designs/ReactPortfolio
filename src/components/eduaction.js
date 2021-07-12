import React from 'react';

const education = [
    {
        schoolID: 1,
        school: "Durham College",
        course: "Graphic Design",
        years: "2017 - 2020"
    },
]

export default function Education() {
    return (
        <div>
            <h3 className="listblock">Education</h3>
            {education.map((school) => (
               <h5 key={school.schoolID}>{school.school} {school.course}, {school.years}</h5> 
            ))}
        </div>
    )
}