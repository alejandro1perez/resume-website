import React from 'react'

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                 <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>May 2017- Aug 2019</h3>
                            <h4>Barry Univeristy - Campus Recreation and Wellness Member</h4>
                            <p>
                            Participated in all activities hosted and managed by the department on campus. Lead and assistant referee for intramural games. Scorekeeper for activities and games. Worked with other members of the department.
                            </p>
                        </div>
                </div>
             </div>
                {/*--*/}
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>Aug 2019 - May 2020</h3>
                            <h4>Barry Univeristy - Campus Recreation and Wellness Supervisor</h4>
                            <p>
                            Managed the members of the department. Oversee activities held by the department on campus. CPR certified supervisor, assist in the supervision of activities and practices for intramural teams as well as the cheerleading team.
                            </p>
                        </div>
                </div>
            </div>
                {/*--*/}
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>Feb 2021 - Present</h3>
                            <h4>Central Drug Puerto Rico - IT Support Technician</h4>
                            <p>
                            On site technician managing companys devices, network and servers. Troubleshoot and repair when computers, scanners, pockets, printers, servers, VOIP, smart OTC vending machine, Tv Displays, had problems. Recommended computer products and applications to improve productivity.
                            </p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
