import React from 'react';
import me from "./image/little.png"

export default function AboutImage() {
    return (
        <div>
            <img className="profileImage" src={me} alt="this is me"></img>
        </div>
    )
}