import React from 'react'
import Resume from '../accets/resume.pdf'
export default function Header() {
    return (
        <div className="header">
            <div className="navbar">
                <div className="navitem">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="/">Work</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Connect</a></li>
                    </ul>
                    <div className="resume"><span className="resume-text"><a href={Resume}>Resume</a> </span></div>
                </div>
            </div>
        </div>
    )
}
