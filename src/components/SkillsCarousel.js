import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar from "../images/skillsPic/skillspic1.jpeg"
import avatar2 from "../images/skillsPic/skillspic2.jpeg"
import avatar3 from "../images/skillsPic/skillspic3.jpeg"

const skillsCarousel = () => {
    return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        >
            <>
            <img src={avatar}></img>
            <div className="myCarousel">
                <h3>JAVA && PYTHON</h3>
                <p>Lorem pas lorem tu so loru lara caca lmao lorem lau elit adimpising</p>
            </div>
            
            </>
            <>
            <img src={avatar2}></img>
            <div className="myCarousel">
                <h3>Web Development</h3>
                <p>Lorem pas lorem tu so loru lara caca lmao lorem lau elit adimpising</p>
            </div>
            </>
            <>
            <img src={avatar3}></img>
            <div className="myCarousel">
                <h3>IT support specialist</h3>
                <p>Lorem pas lorem tu so loru lara caca lmao lorem lau elit adimpising</p>
            </div>
            
            </>
        </Carousel>
    )
}

export default skillsCarousel
