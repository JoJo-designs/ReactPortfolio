import React from 'react';
import Body from './body';
import '../styles/reset.css'
import '../styles/style.css'
import '../styles/about.css'

export default function Header() {
    return (
        <div>
            <h1 className="header">Jodi Ladouceur</h1>
            <Body />
        </div>
        
    );
}