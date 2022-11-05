import {useState} from "react"

export const Contact = () => {

 const info = {
        first_name: "",
        last_name: "",
        email: "",
        message: ""
    };

 const [checkbox, setCheckbox] = useState(false);
 const [input, setInput] = useState("");

 const name = "CodedLibra";

 const handleCheck = (e) => {
     setCheckbox(e.target.checked);
 }

 const handleSubmit = (e) => {
        e.preventDefault();
        setInput("");
    }

  return (
    
    <div className="container mt-3 px-20">

    <h2 className="pb-2">Contact Me</h2>

    <p>Hi there, contact me to ask me about anything you have in mind.</p>

    <div class="position-fixed bottom-0 end-0 p-3">
    <div id="btn__submit" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-body">
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        <small>Contact Form Sent..</small>
        </div>
     </div>
    </div>

    <form onSubmit={handleSubmit}>
        <div className="row mb-3">
            <div className="col-sm">
            <label htmlFor="first-name" className="mb-1 mt-4">
                First name
            </label>
                <input id="first_name"
                className="form-control"
                type="text"
                placeholder="Enter your first name"
                onChange={(e)=> setInput(e.target.value)}
                value={input.first_name}
                required/>
            </div>
            <div className="col-sm">
            <label htmlFor="last-name" className="mb-1 mt-4">
                Last name
            </label>
                <input id="last_name"
                className="form-control"
                type="text"
                value={input.last_name}
                placeholder="Enter your last name"
                onChange={(e)=> setInput(e.target.value)}
                />
            </div>
        </div>

        <div className="grid mb-4">
            <label htmlFor="email" className="mb-1 mt-2">
                Email
            </label>
                <input id="email"
                className="form-control"
                type="email"
                value={input.email}
                placeholder="yourname@email.com"
                onChange={(e)=> setInput(e.target.value)}
                required/>
    
        </div>

        <label htmlFor="message" className="mb-1 mt-2">
            Message
        </label>
                <textarea
                id="message"
                className="form-control"
                rows="4"
                value={input.message}
                name="text"
                placeholder="Send me a message and i'll reply as soon as possible..."
                onChange={(e)=> setInput(e.target.value)}
                required>
                </textarea>
            
        <div className="form-check mb-3 mt-3">
                <input className="form-check-input"
                type="checkbox" 
                checked={checkbox}
                onChange={handleCheck}
                name="checkbox"
                />
            <label className="form-check-label">
                You agree to providing your data to {name} who may contact you.
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
