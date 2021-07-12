import React from 'react';

const job = [
    {
        job: 1,
        jobTitle: "tour guild",
        company: "friends of the keewatin",
        dates: "Summer 2014 - 2016",
        type: "volunteer",
        desc: "Volunteer to give tours around a 1900's cruise ship. It was important to speck clearly"
    },
    {
        job: 2,
        jobTitle: "tour guild",
        company: "friends of the keewatin",
        dates: "Summer 2014 - 2016",
        type: "volunteer",
        desc: "Volunteer to give tours around a 1900's cruise ship. It was important to speck clearly"
    },
    {
        job: 3,
        jobTitle: "tour guild",
        company: "friends of the keewatin",
        dates: "Summer 2014 - 2016",
        type: "volunteer",
        desc: "Volunteer to give tours around a 1900's cruise ship. It was important to speck clearly"
    },
    {
        job: 4,
        jobTitle: "tour guild",
        company: "friends of the keewatin",
        dates: "Summer 2014 - 2016",
        type: "volunteer",
        desc: "Volunteer to give tours around a 1900's cruise ship. It was important to speck clearly"
    },
   
]

export default function Jobs() {
    return (
        <div>
            <h3 className="listblock">Experience</h3>
            {job.map((job) => (
            <div className="twenty" key={job.job}>
               <h5>{job.type}{job.jobTitle},</h5>
               <h5>{job.company},</h5>
               <h5>{job.dates}</h5>
               <p>{job.desc}</p>
            </div>
            ))}
        </div>
    )
}