import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../styles/footer.css'
// social media link npm https://jaketrent.github.io/react-social-icons/

export default function Footer() {
    return (
        <div className="center">
            <SocialIcon url="https://www.linkedin.com/in/jodi-ladouceur/" bgColor="#fff" fgColor="rgb(209, 88, 88)"/>
            <SocialIcon url="https://github.com/JoJo-designs"  bgColor="#fff" fgColor="rgb(209, 88, 88)"/>
            <SocialIcon url="https://www.youtube.com/channel/UCtYmd8e0Mn7Qq-Ndfahr7zA" bgColor="#fff" fgColor="rgb(209, 88, 88)"/>
        </div>
    )
}