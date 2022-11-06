import {useState} from "react"

export const Contact = () => {

 const info = {
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    };

 const [checkbox, setCheckbox] = useState(false);
 const [input, setInput] = useState(info);

 let name = "CodedLibra";

 const handleCheck = (e) => {
     setCheckbox(e.target.checked);
 }

 const handleChange = (e) => {
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
 }

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
    }

  return (

    <div className="container px-5">

    <h2 className="pb-2 mt-5">Contact Me</h2>

    <p>Hi there, contact me to ask me about anything you have in mind.</p>
{/* 
    <div class="position-fixed bottom-0 end-0 p-3">
    <div id="btn__submit" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-body">
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        <small>Contact Form Sent..</small>
        </div>
     </div>
    </div> */}

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

  )
}
