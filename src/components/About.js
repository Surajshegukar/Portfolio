import React from "react";

function About() {
  return (
    <div id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="./assets/about-pic.png"
                        
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="./assets/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                Fresher <br />
                Full Stack MERN Developer
              </p>
            </div>
            <div className="details-container">
              <img
                src="./assets/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                B.E(Computer Engineering)
                <br />
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Hello! I am Suraj Shegukar. I am from Parbhani. Currently in Pune
              and pursuing B.E from Zeal College Of Engineering and Research.
              I'm passionate about creating beautiful, functional, and
              user-friendly websites and applications, and I'm constantly
              pushing myself to learn and grow as a developer. Love building
              full-stack clones and side projects.
            </p>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onclick="location.href='./#experience'"
      />
    </div>
  );
}

export default About;
