import React from 'react'

function Project() {
  return (
    <div id="projects">
                        <p className="section__text__p1">Browse My Recent</p>
                        <h1 className="title">Projects</h1>
                        <div className="experience-details-container">
                            <div className="about-containers">
                                <div className="details-container color-container">
                                    <div className="article-container">
                                        <img
                                            src="./assets/project-1.png"
                                            alt="Project 1"
                                            className="project-img"
                                        />
                                    </div>
                                    <h2 className="experience-sub-title project-title">Algorithmic Trading Using ML</h2>
                                    <div className="btn-container">
                                        <button
                                            className="btn btn-color-2 project-btn"
                                            onclick="location.href='https://github.com/'"
                                        >
                                            Github
                                        </button>
                                        <button
                                            className="btn btn-color-2 project-btn"
                                            onclick="location.href='https://github.com/'"
                                        >
                                            Live Demo
                                        </button>
                                    </div>
                                </div>
                                <div className="details-container color-container">
                                    <div className="article-container">
                                        <img
                                            src="./assets/project-2.png"
                                            alt="Project 2"
                                            className="project-img"
                                        />
                                    </div>
                                    <h2 className="experience-sub-title project-title">Random Password Generator Using React</h2>
                                    <div className="btn-container">
                                        <button
                                            className="btn btn-color-2 project-btn"
                                            onclick="location.href='https://github.com/'"
                                        >
                                            Github
                                        </button>
                                        <button
                                            className="btn btn-color-2 project-btn"
                                            onclick="location.href='https://github.com/'"
                                        >
                                            Live Demo
                                        </button>
                                    </div>
                                </div>
                                <div className="details-container color-container">
                                    <div className="article-container">
                                        <img
                                            src="./assets/project-3.png"
                                            alt="Project 3"
                                            className="project-img"
                                        />
                                    </div>
                                    <h2 className="experience-sub-title project-title">Invoice Mangement System</h2>
                                    <div className="btn-container">
                                        <button
                                            className="btn btn-color-2 project-btn"
                                            onclick="location.href='https://github.com/'"
                                        >
                                            Github
                                        </button>
                                        <button
                                            className="btn btn-color-2 project-btn"
                                            onclick="location.href='https://github.com/'"
                                        >
                                            Live Demo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            src="./assets/arrow.png"
                            alt="Arrow icon"
                            className="icon arrow"
                            onclick="location.href='./#contact'"
                        />
                    </div>
  )
}

export default Project