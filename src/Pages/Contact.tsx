import React, { FC } from "react";

const Contact: FC = () => {
  return (
    <div className="container">
      <div className="body my-5">
      <div className="text-center">
        <p className="h2">Contact Us</p>
      </div>
      <div className="row my-5">
        <div className="col-md-8">
        <iframe className="shadow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14198.597535011324!2d77.89457517888731!3d27.1673197282959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973884ba72af91b%3A0x840a30d9ff16d0a2!2sLaramda%2C%20Uttar%20Pradesh%20283105!5e0!3m2!1sen!2sin!4v1642019903204!5m2!1sen!2sin" width="100%" height="550" loading="lazy"></iframe>
        </div>
        <div className="col-md-4 m-0 row border py-3 shadow">
          <p className="h3 my-3 text-center">Send Query</p>
          <hr/>
          <div className="col-md-12 mb-2">
            <label className="form-label" style={{fontWeight:600}}>Name</label>
            <input className="form-control" type="text" name="name" id="name" />
          </div>
          <div className="col-md-12 mb-2">
            <label className="form-label" style={{fontWeight:600}}>Mobile No</label>
            <input className="form-control" type="text" name="phone" id="phone" />
          </div>
          <div className="col-md-12 mb-2">
            <label className="form-label" style={{fontWeight:600}}>Email ID</label>
            <input className="form-control" type="text" name="email" id="email" />
          </div>
          <div className="col-md-12">
            <label className="form-label" style={{fontWeight:600}}>Message</label>
            <textarea className="form-control" rows={6} name="msg" id="msg" ></textarea>
          </div>
        </div>
      </div>
      <div className="row text-center">
          <div className="col-md-4">
            <div className="py-4 shadow" style={{borderRadius:'15px'}}>
              <p className="h1"><i className="fa fa-map"></i></p>
              <p>Dhanoli Agra UP India 282001</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="py-4 shadow" style={{borderRadius:'15px'}}>
              <p className="h1"><i className="fa fa-phone"></i> </p> 
              <p>+91-7078049692</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="py-4 shadow" style={{borderRadius:'15px'}}>
              <p className="h1"><i className="fa fa-envelope"></i> </p>
              <p>rajputumesh117@gmail.com</p>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
