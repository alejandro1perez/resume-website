import React from "react";
import VirtualTrainer from "../images/dashboard VPT.png";
import DuckHunt from "../images/duckhuntgamemenu.png";
import JavaColor from "../images/cs3.png";
import FPS from "../images/vg3.png";
//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//Popupbox
import {PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Projects = () => {

//VPT
const openPopupboxVPT = () => {
    const content = <img className= "projects-image-popupbox" src={VirtualTrainer} alt="Virtual Personal Trainer Project..."></img>
    PopupboxManager.open({ content,
                            config:{  
                                titleBar: {
                                enable:true,
                                text: 'Virtual Personal Trainer'
                            },
                            fadeIn:true,
                            fadeInSpeed:500
                        }
    })
        
            
        //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        //                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        //     <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/alejandro1perez/my-resume")}>https://github.com/alejandro1perez/my-resume</a>
    
}
// const popupboxConfigVPT = {
//     titleBar: {
//         enable:true,
//         text: 'Virtual Personal Trainer'
//     },
//     fadeIn:true,
//     fadeInSpeed:500
// }
const openPopupboxVPT2 = () => {
    const content = <img className= "projects-image-popupbox" src={DuckHunt} alt="Virtual Personal Trainer Project..."></img>
    PopupboxManager.open({ content,
                            config:{  
                                titleBar: {
                                enable:true,
                                text: '3d Duck Hunt'
                            },
                            fadeIn:true,
                            fadeInSpeed:500
                        }
    })
}
const openPopupboxVPT3 = () => {
    const content = <img className= "projects-image-popupbox" src={JavaColor} alt="Virtual Personal Trainer Project..."></img>
    PopupboxManager.open({ content,
                            config:{  
                                titleBar: {
                                enable:true,
                                text: 'Java color manipulation'
                            },
                            fadeIn:true,
                            fadeInSpeed:500
                        }
    })
}
const openPopupboxVPT4 = () => {
    const content = <img className= "projects-image-popupbox" src={FPS} alt="Virtual Personal Trainer Project..."></img>
    PopupboxManager.open({ content,
                            config:{  
                                titleBar: {
                                enable:true,
                                text: 'FPS'
                            },
                            fadeIn:true,
                            fadeInSpeed:500
                        }
    })
}


    return (
        <div id="projects" className="projects-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Projects</h1>
                    <div className="row">
                        <div className="projects-image-box justify-content-center col" onClick={openPopupboxVPT}>
                            <img className="projects-image" src={VirtualTrainer} alt="Virtual Personal Trainer" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
                            
                        </div>
                        
                        <div className="projects-image-box justify-content-center col" onClick={openPopupboxVPT2}>
                            <img className="projects-image" src={DuckHunt} alt="3d Duck Hunt Game" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
                           
                        </div>
                        <div className="projects-image-box justify-content-center col" onClick={openPopupboxVPT3}>
                            <img className="projects-image" src={JavaColor} alt="Java Color Manipulation" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
                           
                        </div>
                        <div className="projects-image-box justify-content-center col" onClick={openPopupboxVPT4}>
                            <img className="projects-image" src={FPS} alt="First Person Shooter Game" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
                            
                        </div>
                    </div>
                </div>
                <PopupboxContainer /> 
               
               
               
               
                {/* <PopupboxContainer {...popupboxConfigDuckHunt} /> */}
                {/*<PopupboxContainer {...popupboxConfigJava} /> */}
                {/* c<PopupboxContainer {...popupboxConfigFPS} />  */}
            
        </div>
        
    )
}

export default Projects
