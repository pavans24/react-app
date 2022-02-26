import React, { useState } from 'react';
import './OnPageForm.css';
export default function OnPageForm()
{
     
	const [state, setState] = useState({
		uname : "",
		unumber : "",
		uemail : "",
		uques : ""
		

	});
    
	
	const handleChange = e => {
		setState({
			...state,
			[e.target.name] : e.target.value,
		})
		
	}

	const handleSubmit = e => {
		e.preventDefault()
		if(state.uname === "")
		{
			alert("Please fill the name")
			
		}
		else if(state.unumber === "")
		{
			alert("Please fill the number")
		}
		else if(state.uemail === "")
		{
			alert("Please fill the email")
		}
		else if(state.uques === "")
		{
			alert("Please check it")
		}
		else 
		{
			
			alert("Form submitted successfully")
			fetch("http://localhost:8080/form/add",{
				method : 'POST',
				headers : { 'Content-Type' : 'application/json' },
				body : JSON.stringify({
					"name":state.uname,
					"number":state.unumber,
					"email":state.uemail,
					"owner":state.uques
				})

			}).then(() => {
				console.log("New Lead added")
			})
		}
	}

    return(
       <>
        <h2 className="form-head-1">To Manage your Property in India</h2>
		<h2  className="form-head-2">Get in touch with our Property Management Expert in India</h2>
				<form>
					<input type="text" placeholder="Name"  name="uname"  className="form-inputs" onChange={handleChange} value={state.uname} /><br/>
					<input type="number" placeholder="Phone" name="unumber" className="form-inputs" onChange={handleChange} value={state.unumber}  /><br/>
					<input type="email" placeholder="Email" name="uemail" className="form-inputs" onChange={handleChange} value={state.uemail}  /><br/>
					<div>
					<p className="form-ask-ques">Are you a property owner?</p>
					<div className="form-ask">
						<input type="radio"  name="uques"  className="form-inputs-ques" value="yes" checked={state.uques === "yes"} onChange={handleChange} />
                         <label  >Yes</label><br/>
					</div>
					<div className="form-ask">
						<input type="radio"  name="uques" className="form-inputs-ques" value="no" checked={state.uques === "no"} onChange={handleChange} />
                         <label  >No</label><br/>
					</div>
					
				
				</div>
								
						
                        <button name="property_submit_main" className="form-inputs-btn" onClick={handleSubmit}>
                        Manage My Home
                            </button>		
					
							</form>
								
					<p className="on-page-form-response">Thank you for Filling details</p>
					<div>
						<a href="tel:+919036015272" className="call-btn">Call or WhatsApp us +91-9036015272</a>
					</div>
       </>
    );
}