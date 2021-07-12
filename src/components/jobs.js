import React from 'react';

const job = [
    {
        job: 1,
        jobTitle: "Frozen and Dairy Associate",
        company: "Walmart Canada",
        dates: "Dec 2020 - present",
        desc: "Keeping the shelves stocked and helping customers find stuff"
    },
    {
        job: 2,
        jobTitle: "Graphic Design Intern",
        company: "Gao Tek",
        dates: "June 2020 - Sept 2020",
        desc: "Edited images and occasionally created a layout of text on the image."
    },
    {
        job: 3,
        jobTitle: "Graphic Design Intern",
        company: "The Oshawa Express",
        dates: "Jan 2020 - Mar 2020",
        desc: "Edit picture for the website and made ads for the website and news paper."
    },
    {
        job: 4,
        jobTitle: "General Labour",
        company: "Tech-form",
        dates: "Summer 2019",
        desc: "Building some car parts. It was important to keep an eye out for bad parts."
    },
    {
        job: 5,
        jobTitle: "Sail Staff Cadet",
        company: "Sea Cadet Program",
        dates: "Summers 2016 - 2017",
        desc: "Like a summer camp counsellor but I was teaching them who to sail"
    },
    {
        job: 6,
        jobTitle: "Volunteer Tour Guild",
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
               <h5>{job.jobTitle},</h5>
               <h5>{job.company},</h5>
               <h5>{job.dates}</h5>
               <p>{job.desc}</p>
            </div>
            ))}
        </div>
    )
}