import React from "react";
import VirtualTrainer from "../images/dashboard-VPT.png";
import DuckHunt from "../images/duckhuntfps.png";
import JavaColor from "../images/cs3.png";
import FPS from "../images/vg3.png";
import python from "../images/python.png";
//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
//Popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import pdf from '../Documents/CS_Seminar_Barry_Poster.pdf';
import pdf1 from '../Documents/Duck Hunt Documentation.pdf';
import pdf2 from '../Documents/CS204FinalProjectDocumentation.pdf';

const Projects = () => {
    const openPopupboxVPT = () => {
        const content =
            <>
                <img className="projects-image-popupbox" src={VirtualTrainer} alt="Virtual Personal Trainer Project..." />
                <p>Team of two, designed/developed web application that incorporates fitness tracking technology, and database component. Webapp front-end: HTML 5, CSS, Bootstrap 4; database component/connection: phpMyAdmin tool and PHP; back-end: AJAX (Asynchronous JavaScript And XML).</p>
                <a className="btn-main-offer" href={pdf} target="_blank">Details</a>
            </>
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: 'Virtual Personal Trainer'
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
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
        const content =
            <>
                <img className="projects-image-popupbox" src={DuckHunt} alt="FPS Duck Hunt Project..."></img>
                <p className="project-description">This project is a first-person shooter duck hunt game, developed using C# and Unity 3D.
                    I managed a team of five for 3 months to ensure project components were developed on
                    time. I developed scripts for player and enemy movement, as well as player and weapon mechanics.</p>
                <a className="btn-main-offer" href={pdf1} target="_blank">Details</a>
            </>
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: 'FPS Duck Hunt'
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }
    const openPopupboxVPT3 = () => {
        const content =
            <>
                <img className="projects-image-popupbox" src={JavaColor} alt="Java Color Manipulation Project..."></img>
                <p className="project-description">This was an in-class assignment where I used color manipulation with GUI. I developed
                    the algorithm to change image pixels colors, ranging from rgb to negate and brightness adjustment, algorithm was made using Java and NetBeans IDE.</p>

            </>
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: 'Java Color Manipulation'
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }
    const openPopupboxVPT4 = () => {
        const content =
            <>
                <img className="projects-image-popupbox" src={python} alt="Covid-19 Data Analysis..."></img>
                <p className="project-description">Data Modification/Analysis & Data Reporting/Reflection on Covid-19 cases and hospitalized cases. I managed and worked alongside team of three, and developed algorithms for data fetch, data manipulation and data display using Python programming language and Pandas/Matplotlib library.</p>
                <a className="btn-main-offer" href={pdf2} target="_blank">Details</a>
            </>
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: 'Covid-19 Data Analysis'
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }


    return (
        <div id="projects" className="projects-wrapper">
            <div className="container-fluid">
                <h1 className="text-uppercase text-center py-5">Projects</h1>
                <div className="image-box-wrapper row">
                    <div className="col mx-auto projects-row">
                        <div className="text-center projects-image-box" onClick={openPopupboxVPT}>
                            <img className="rounded-3 mx-auto d-block projects-image" src={VirtualTrainer} alt="Virtual Personal Trainer" />
                            <div className="rounded-3 text-center overflow">
                                <FontAwesomeIcon className="projects-icon" icon={faLocationArrow} />
                            </div>
                        </div>

                        <div className="text-center projects-image-box" onClick={openPopupboxVPT2}>
                            <img className="rounded-3 mx-auto d-block projects-image" src={DuckHunt} alt="3d Duck Hunt Game" />
                            <div className="rounded-3 text-center overflow">
                                <FontAwesomeIcon className="projects-icon" icon={faLocationArrow} />
                            </div>

                        </div>
                    </div>
                    <div className="col mx-auto projects-row">

                        <div className="text-center projects-image-box" onClick={openPopupboxVPT3}>
                            <img className="rounded-3 mx-auto d-block projects-image" src={JavaColor} alt="Java Color Manipulation" />
                            <div className="rounded-3 text-center overflow">
                                <FontAwesomeIcon className="projects-icon" icon={faLocationArrow} />
                            </div>
                        </div>
                        <div className="text-center projects-image-box" onClick={openPopupboxVPT4}>
                            <img className="rounded-3 mx-auto d-block projects-image" src={python} alt="First Person Shooter Game" />
                            <div className="rounded-3 text-center overflow">
                                <FontAwesomeIcon className="projects-icon" icon={faLocationArrow} />
                            </div>

                        </div>

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
