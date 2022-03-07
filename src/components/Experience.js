import React from 'react'

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>

            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>February 2021 - Present</h3>
                        <h4>Central Drug Puerto Rico - IT Support Technician</h4>
                        <p className="text-dark">
                            Provide on site support and maintenance of computers and other related devices. Maintenance of company-wide network spread across five call centers and different departments.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>November 8-10, 2021</h3>
                        <h4>Epygi/PBX Certified Training</h4>
                        <p className="text-dark">
                            Hands-on technical training on Epygi user interface for QXE1T1 system and Epygi eqall softphone. Learned the skills needed to configure and install Epygi systems on a company wide scale. Also, learned key programs and features Epygi system provides.
                        </p>
                    </div>
                </div>
            </div>
            {/*--*/}
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>August 2019 - May 2020</h3>
                        <h4>Barry Univeristy - Campus Recreation and Wellness Supervisor</h4>
                        <p className="text-dark">
                            Managed the members of the department. Oversee activities held by the department on campus. CPR certified supervisor, assist in the supervision of activities and practices for intramural teams as well as the cheerleading team.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>December 2018</h3>
                        <h4>Fatima Medical Center, Miami FL— Computer Support Technician</h4>
                        <p className="text-dark">
                            Worked alongside team to setup and maintain computer lab at medical center. Computer lab consisted of 10 computers running on Puppy Linux operating system.
                        </p>
                    </div>
                </div>
            </div>
            {/*--*/}
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>May 2017- December 2018</h3>
                        <h4>Barry Univeristy - Campus Recreation and Wellness Member</h4>
                        <p className="text-dark">
                            Participated in all activities hosted and managed by the department on campus. Lead and assistant referee for intramural games. Scorekeeper for activities and games. Worked with other members of the department.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
