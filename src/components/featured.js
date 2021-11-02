import React from 'react';
import { SocialIcon } from 'react-social-icons';
import feat from "./image/img16.png"

export default function Featured() {
    return (
        <div>
           <a href=" https://jojo-designs.github.io/SuperCodeQuiz/">
            <img className="featflex" src={feat} alt="a website landing page which starts a quiz about coding"></img>
            </a>
            <div className="overLap"><SocialIcon url="https://github.com/JoJo-designs/SuperCodeQuiz" bgColor="none" fgColor="rgb(209, 88, 88)"/></div>
        </div>
    )
}