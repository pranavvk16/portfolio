import React from 'react'

export default function Contact() {
    return (
        <div id="contact" className="contact">
            <h2>Say Hello</h2><br />
            <div className="username">What is your name?<br /> <input type="text" /></div>
            <div className="usermail">Your email<br /> <input type="email" /> </div>
            <div className="usermsg">Whatsapp!!<br /><textarea type="text" /></div><br />
            <button className="send">Get in Touch</button>
        </div>
    )
}
