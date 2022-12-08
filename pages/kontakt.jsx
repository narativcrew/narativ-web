const Contact = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>Kontakt</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Napiste nam:</h1>
                    <form>
                        <div className="form-group">
                            <label for="inputName">Your name</label>
                            <input type="name" className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Your name here"/>
                            <small id="nameHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="inputEmail">Your email</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="Your email here"/>
                        </div>
                        <div class="form-group">
                            <label for="inputSubject">Subject</label>
                            <input type="email" className="form-control" id="inputSubject" placeholder="Subject"/>
                        </div>
                        <div class="form-group">
                            <label for="textareaMessage">Message</label>
                            <textarea class="form-control" id="textareaMessage" rows="3" placeholder="Your message here"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
