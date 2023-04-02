import React from "react";
import bgImg from "../assets/Profile Pic.jpg"
import instaIcon from "../assets/instagramicon.png"
import githubIcon from "../assets/githubicon.png"
import linkedinIcon from "../assets/linkedinicon.png"


export default function Home() {
    return(
        <div className="home-container">
            <img src={bgImg} className="home-hero-img" />
            <h1 className="home-title">Pedro Henrique Calixto Dias</h1>
            <div className="social-media-icons">
                <a href="https://www.instagram.com/p3drr0" target="_blank">
                    <div className="instagram">
                        <img src={instaIcon} className="social-icon"/>
                        <h3 className="social-title">instagram.com/p3drr0</h3>  
                    </div>
                </a>
                <a href="https://github.com/DantDev" target="_blank">
                    <div className="instagram">
                        <img src={githubIcon} className="social-icon"/>
                        <h3 className="social-title">github.com/DantDev</h3>  
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/pedro-calixto-526986257/" target="_blank">
                    <div className="instagram">
                        <img src={linkedinIcon} className="social-icon"/>
                        <h3 className="social-title">Linkedin.com</h3>  
                    </div>
                </a>
            </div>
            <p className="home-text">I am a self taught frontend developer, who has a little of background on desing, i have worked with marketing using Photoshop and also i have some experience with 3D using Blender.I am always looking for learning new things , trying to self improve on my skills.</p>
        </div>
    )
}