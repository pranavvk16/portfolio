import React from 'react'

export default function Header() {
    return (
        <div className="header">
            <div className="navbar">
                <div className="navitem">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Work</a></li>
                    <li><a href="/">About</a></li>
                </ul>
                <div className="resume"><span className="resume-text">Resume</span></div>
                </div>
            </div>
        </div>
    )
}
