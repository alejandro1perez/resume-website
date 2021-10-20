import React, { useState } from "react";
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, error } = useForm();

  const serviceID = "service_b8fasvk";
  const templateID = "template_ID";
  const userID = "user_vvVUpBKSeUsjisKhuzeK7";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
    )
    r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
     .then((result) => {
        setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
      }).catch(err => console.error('Oops something went wrong. My email perez.alejandro1221@gmail.com '));
  }

  return (
    <div className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>Please fill out the form and describe you project needs and I'll contact you as soon as possible.</p>
      <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  {...register ("message", {
                    required:"Required",
                    maxLength: {
                        value:20,
                        message:"Please enter name with less than 20 characters"

                    }    
                })
            }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {error && error.message}
              </span>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  {...register ("message", {
                    required:"Required",
                    maxLength: {
                        value:20,
                        message:"Please enter name with less than 20 characters"

                    }    
                })
            }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {error && error.message}
              </span>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  {...register ("message", {
                    required:"Required",
                    maxLength: {
                        value:20,
                        message:"Please enter name with less than 20 characters"

                    }    
                })
            }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {error && error.message}
              </span>
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  {...register ("message", {
                    required:"Required",
                    maxLength: {
                        value:20,
                        message:"Please enter name with less than 20 characters"

                    }    
                })
            }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {error && error.message}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Please describe shortly you project..."
                  name="description"
                  {...register ("message", {
                    required:"Required",
                    maxLength: {
                        value:20,
                        message:"Please enter name with less than 20 characters"

                    }    
                })
            }
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {error && error.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">contact me</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts;
