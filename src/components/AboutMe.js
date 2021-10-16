import React from "react"
import author from "../picture1.jpeg"

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div class="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..."></img>
                    </div>                  
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>Hello World!
                        My name is Alejandro Perez, recent Barry University graduate. Very ambitious and motivated to work in the field of Computer Science. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
