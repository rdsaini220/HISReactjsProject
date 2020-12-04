import React, {Component, useState, useEffect} from 'react';
// import {NavLink} from 'react-router-dom';
// import $ from 'jquery' // node module
const error = {
	  color: "#dc3545",
	  fontSize:"11px"
    };

const FormCard = () =>{	  
	const intialValues = { name: "",email: "",phone: "",skype: "",service: "",budget: "",message: "", password: "" };
	const [formValues, setFormValues] = useState(intialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);


const submitForm = () => {
	const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        },
        body: JSON.stringify(formValues)
    };
    fetch('https://www.helpfulinsightsolution.com/api/v1/contacts', requestOptions)
	.then(response => response.json())
	.then(data => alert(data.id));	
	 setFormValues({ ...formValues, name : '',email : '',phone : '',skype : '',service : '',budget : '',message : '' });
  };

 const handleChange = (e) => {
    const { name, value } = e.target;
	setFormValues({ ...formValues, [name]: value });
  };

const handleSubmit = (e) => {
    e.preventDefault();
	setFormErrors(validate(formValues));	
	setIsSubmitting(true);
  };

const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "The email field is required.";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
	}
	if (!values.name) {
      errors.name = "The name field is required.";
    } else if (values.name.length < 4) {
      errors.name = "Name field must be at least 4 characters in length.";
	}
	if (!values.phone) {
      errors.phone = "The phone field is required.";
    } else if (values.phone.length < 10) {
      errors.phone = "Phone No. field must be at least 10 characters in length.";
	}
	if (!values.skype) {
      errors.skype = "The Skype/Whatsapp id field is required.";
    }
	if (!values.service) {
      errors.service = "The service field is required.";
    }
	if (!values.budget) {
      errors.budget = "The budget field is required.";
    }
	if (!values.message) {
      errors.message = "The message field is required.";
    }
    return errors;
  };

useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
	  submitForm();
    }
  }, [formErrors]);

       return (<>
				 <form onSubmit={handleSubmit} id='MyForm'  className="subscribe-form" method="post">
					<div className="row">
						<div className="col-12 col-md-6">
							<div className="form-group position-relative">
								<input type="text" value={formValues.name} onChange={handleChange} name="name" id="name" className={"form-control"} placeholder="Name" autocomplete="off" />
								<span className="formicon"><i className="flaticon-user"></i></span>
								{formErrors.name && (<span style={error} >{formErrors.name}</span>)}
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="form-group position-relative">
								<input type="email" value={formValues.email} onChange={handleChange} name="email" id="email" className="form-control" placeholder="Email Address" autocomplete="off" />
								<span className="formicon"><i className="flaticon-envelope"></i></span>
							{formErrors.email && (<span style={error}>{formErrors.email}</span>)}
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="form-group position-relative">
								<input type="tel" value={formValues.phone} onChange={handleChange} name="phone" id="phone" className="form-control" placeholder="Phone Number" autocomplete="off" />
								<span className="formicon"><i className="flaticon-phone-call"></i></span>
								{formErrors.phone && (<span style={error} >{formErrors.phone}</span>)}
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="form-group position-relative">
								<input type="text" value={formValues.skype} onChange={handleChange} name="skype" id="skype" className="form-control" placeholder="Skype/Whatsapp" autocomplete="off" />
								<span className="formicon"><i className="flaticon-laptop"></i></span>
								{formErrors.skype && (<span style={error} >{formErrors.skype}</span>)}
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="form-group position-relative">
								<select className="form-control" value={formValues.service} onChange={handleChange} name="service" id="service">
									<option value="">Service</option>
									<option value="Mobile Development">Mobile Development</option>
									<option value="Web Development">Web Development</option>
									<option value="UI/UX Design">UI/UX Design</option>
								</select>
								<span className="formicon"><i className="flaticon-24-hours-phone-service"></i></span>
								{formErrors.service && (<span style={error} >{formErrors.service}</span>)}
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="form-group position-relative">
								<select className="form-control" value={formValues.budget} onChange={handleChange} name="budget" id="budget">
									<option value="">Budget</option>
									<option value="$1000 - $2000">$1000 - $2000</option>
									<option value="$2000 - $5000">$2000 - $5000</option>
									<option value="$5000 - $10000">$5000 - $10000</option>
									<option value="$10000 - $50000">$10000 - $50000</option>
									<option value="$50000 - $75000">$50000 - $75000</option>
									<option value="$75000 - $100000">$75000 - $100000</option>
									<option value="> $100000">&gt; $100000</option>
								</select>
								<span className="formicon"><i className="flaticon-user"></i></span>
								{formErrors.budget && (<span style={error} >{formErrors.budget}</span>)}
							</div>
						</div>
						<div className="col-12 col-md-12">
							<div className="form-group position-relative">
								<textarea value={formValues.message} onChange={handleChange} name="message" id="message" className="form-control" placeholder="Message"></textarea>
								<span className="formicon"><i className="flaticon-user"></i></span>
								{formErrors.message && (<span style={error} >{formErrors.message}</span>)}
							</div>
						</div>
						<div className="col-12 col-md-12">
							<button type="submit" id="formSubmit" className="btn btnprimary">Send your inquiry</button>
						</div>
					</div>
				</form>        
		</>)

}



export default FormCard;

