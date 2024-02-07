import React from 'react'

import { ReactTyped } from "react-typed";

function Profile() {
  return (
    <div id="profile">

        <div className="section__pic-container">
            <img src={'./assets/profile-pic-2.png'} alt="John Doe profile picture" />
        </div>
        <div className="section__text">
            <p className="section__text__p1">Hello &#128075;, I'm </p>
            <h1 className="title">Suraj Shegukar</h1>
            <p className="section__text__p2"><ReactTyped
                strings={[
                    "Software Engineer",
                    "Web Developer",
                    "Ethical Hacker",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                >
                </ReactTyped></p>
            <div className="btn-container">
                <button
                    className="btn btn-color-2"
                    onclick="window.open('./assets/resume-example.pdf')"
                >
                    Download CV
                </button>
                <button className="btn btn-color-1" onclick="location.href='./#contact'">
                    Contact Info
                </button>
            </div>
            <div id="socials-container">
                <a href="https://www.linkedin.com/in/surajshegukar2732"><img
                    src="./assets/linkedin.png"
                    alt="My LinkedIn profile"
                    className="icon"
                />
                </a>
                <a href='https://github.com/Surajshegukar'>
                <img
                    src="./assets/github.png"
                    alt="My Github profile"
                    className="icon"
                />
                </a>
            </div>
        </div>
                    
    </div>
  )
}

export default Profile