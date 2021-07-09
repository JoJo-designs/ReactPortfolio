import React from 'react';

export default function NavItem ({currentPage, changePage}) {
    return (
        <ul>
            <li><a href="#About" onClick={() => changePage('About')}>About</a></li>
            <li><a href="#Portfolio" onClick={() => changePage('Portfolio')}>Portfolio</a></li>
            <li><a href="#Contact" onClick={() => changePage('Contact')}>Contact</a></li>
            <li><a href="#Resume" onClick={() => changePage('Resume')}>Resume</a></li>
            
        </ul>
    )
}

