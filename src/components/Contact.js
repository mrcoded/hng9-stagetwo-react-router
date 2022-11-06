import {useState} from "react";
import Toast from "react-bootstrap/Toast";

const info = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
}; //variable to hold contact inputs

export const Contact = () => {
    const [checkbox, setCheckbox] = useState(false);
    //state for checkbox
    const [input, setInput] = useState(info);
    //state to hold input values
    const [show, setShow] = useState(false);
    //state to show and hide toast notifications.

    let name = "CodedLibra";

    const handleCheck = (e) => {
        setCheckbox(e.target.checked);
    }
    //handleCheck() to hold boolean value for checkbox
   
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
    //handleChange() to hold input change value
    
    const handleSubmit = (e) => {
            e.preventDefault();
            setInput({
                ...input,
                firstName: "",
                lastName: "",
                email: "",
                message: ""
            });
            setCheckbox(false);
            setShow(true);
        }
    //handleSubmit() to prevent page refresh and clear input form.

  return (
 

    <div className="container-fluid-sm px-3 pt-5">
      <div className="contact-border">
        <h2 className="pb-2 mt-5"
         style={{color:"#101828", fontSize:"36px"}}
         >Contact Me</h2>

         <p style={{color:"#475467", fontSize:"20px"}}>
            Hi there, contact me to ask me about anything you have in mind.
         </p>

        <div className="position-fixed top-0 end-0 p-3">
            <Toast onClose={() => setShow(false)}
                show={show} delay={4000} autohide>
                <Toast.Body>
                    <small>Contact Form Sent..</small>
                    <button type="button"
                    className="btn-close me-2 m-auto float-end"
                    data-bs-dismiss="toast" 
                    aria-label="Close">
                    </button>
                </Toast.Body>
            </Toast>
        </div>


    <form onSubmit={handleSubmit}>
        <div className="row mb-3">
            <div className="col-sm">
            <label htmlFor="firstName" className="mb-1 mt-4">
                First name
            </label>
                <input id="first_name"
                className="form-control"
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={input.firstName}
                onChange={handleChange}
                minLength={3}
                required/>
            </div>

            <div className="col-sm">
            <label htmlFor="lastName" className="mb-1 mt-4">
                Last name
            </label>
                <input id="last_name"
                className="form-control"
                type="text"
                name="lastName"
                value={input.lastName}
                placeholder="Enter your last name"
                onChange={handleChange}
                minLength={3}
                required/>
            </div>
        </div>

        <div className="grid mb-4">
            <label htmlFor="email" className="mb-1 mt-2">
                Email
            </label>
                <input id="email"
                className="form-control"
                type="email"
                name="email"
                value={input.email}
                placeholder="yourname@email.com"
                onChange={handleChange}
                minLength={3}
                required/>   
        </div>
        
        <div>
        <label htmlFor="message" className="mb-1 mt-2">
            Message
        </label>
                <textarea
                id="message"
                className="form-control"
                rows="4"
                value={input.message}
                name="message"
                placeholder="Send me a message and i'll reply as soon as possible..."
                onChange={handleChange}
                minLength={5}
                required>
                </textarea>
                
                <div className="invalid-feedback"> 
                    Please enter a message.
                </div>
                </div>
            
        <div className="form-check mb-3 mt-3">
                <input className="form-check-input"
                type="checkbox" 
                checked={checkbox}
                onChange={handleCheck}
                name="checkbox"
                required/>
            <label className="form-check-label">
                <span style={{color:"#475467"}}>
                    You agree to providing your data to {name} who may contact you.
                </span>
            </label>
        </div>

        <div className="d-grid">
            <button id="btn__submit" 
            type="submit"
            className="btn btn-primary btn-block"
            >Send message</button>
        </div>
    </form>
  </div>
</div>

  )
}
