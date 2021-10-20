import React from "react";
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	RedditShareButton,
	RedditIcon,
	LinkedinShareButton,
	LinkedinIcon
} from "react-share";



const Footer = () => {
 return (
	<div className="footer">
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-6 col-sm-6">
					<div className="d-flex">
						<p>Alejandro Perez</p>
					</div>
					<div className="d-flex">
						<p>perez.alejandro1221@gmail.com</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-2 col-sm-6">
					<div className="row">
						<div className="col">
							<a className="footer-nav">Home</a>
							<br />
							<a className="footer-nav">About Me</a>
							<br />
							<a className="footer-nav">Education</a>
						</div>
						<div className="col">
							<a className="footer-nav">Experience</a>
							<br />
							<a className="footer-nav">Projects</a>
							<br />
							<a className="footer-nav">Contacts</a>
						</div>
					</div>
				</div>
                <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                                            <div className="d-flex justify-content-center">
                                                <LinkedinShareButton
                                                    url={"https://www.linkedin.com/"}
                                                    quote={"FullStack Developer"}
                                                    hashtag="#JavaScript"
                                                >
                                                    <LinkedinIcon className="mx-3" size={36} />
                                                </LinkedinShareButton>
                                             </div>
                                        <p className="pt-3 text-center">Copyright&copy; {new Date().getFullYear()}&nbsp; Perez | All Rights Reserved</p>
                                 </div>
                    
                </div>
            </div>
     </div>

        )

}


export default Footer
