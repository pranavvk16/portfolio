import React from 'react'
import Avatar from '../accets/mf-avatar.svg';
export default function About() {
    return (
        <div className="about">
            <div className="content"><h2 className="aboutme">About me</h2><p>Hello! My name is Pranav and I enjoy creating things
                that live on the internet. My interest in web development started back in 2014.</p>
                <p>I have some freelance experience My main focus these days is building accessible,
                    inclusive products and digital experiences to all my clients.</p>
                <p>Here are a few technologies I’ve been working with recently:</p>
                <ul>
                    <li><span className="greaterthan">&gt;</span> Javascript (ES6+)</li>
                    <li><span className="greaterthan">&gt;</span> React</li>
                    <li><span className="greaterthan">&gt;</span> Flutter</li>
                    <li><span className="greaterthan">&gt;</span> Express</li>
                    <li><span className="greaterthan">&gt;</span> WordPress</li>
                    <li><span className="greaterthan">&gt;</span> Node.js</li>
                </ul></div>
            <div className="avatar"><img className="img-avatar" src={Avatar} alt="avatar" /></div>

        </div>
    )
}
