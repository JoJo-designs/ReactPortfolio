import React from 'react';

export default function NavItem ({currentPage, changePage}) {
    return (
        <ul className="nav">
            <li className="navItems"><a href="#About" onClick={() => changePage('About')}>About</a></li>
            <li className="navItems"><a href="#Portfolio" onClick={() => changePage('Portfolio')}> Web Portfolio</a></li>
            <li className="navItems"><a href="#Portfolio" onClick={() => changePage('Graphic')}>Graphic Design</a></li>
            <li className="navItems"><a href="#Contact" onClick={() => changePage('Contact')}>Contact</a></li>
            <li className="navItems"><a href="#Resume" onClick={() => changePage('Resume')}>Resume</a></li>
        </ul>
    )
}

