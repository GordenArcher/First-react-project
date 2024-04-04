import React, { useState, useEffect } from 'react';
import "./assets/CSS/about.css";
import AboutPicture from "./assets/images/free-images.jpg"

function About() {

    const texts = ["Full Stack Engineer", "Front End Engineer", "Back End Engineer", "UI/UX Engineer"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);
      

    return(

        <div className="about_me" id="about">
            <div className="about_container">
                <div className="about_tittle">
                    <h2>About Me</h2>
                </div>
                <div className="about_myself">
                    <div className="my_self">
                        <p>!Hey &#128075; Welcome Again <br /> 
                        I'm a <br />
                        <div className="changing-text">
                            <span className="changing"><em>{texts[index]}</em></span>
                        </div><br />
                        who thrives to create good softwares
                        <br /> 
                        I'm a student at <br /> <a href="https://pentvars.edu.gh" target="_blank">Pentecost University College</a></p> 
                    </div>

                    <div className="aboutPhoto">
                        <div className="right_img">
                            <img src={AboutPicture} alt="about Img" />
                        </div>
                    </div>
                </div> 
            </div>

            <div className="line"></div>
        </div>

    );

}

export default About;