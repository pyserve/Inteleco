

export default function ContactForm () {
    return(
    <>
    <div className="col-md-6 my-3">
        <div className="text-center">
            <img src={"/img/teams/contact1.jpg"} alt="contact" className="w-75" />
        </div>
    </div>
    <div className="col-md-6 my-3">
        <div className="fs-1">Contact Us</div>
        <div className="py-1">
            <span>Please complete the form to the right and one of our team will be in touch with you shortly.</span>
            <br /><br />
            <span>You can also contact us by emailing <span className="text-danger">info@nextai.ca</span></span>
        </div>
        <form className="needs-validation bg-light p-2 rounded" noValidate>
            <div className="col-md-12 mb-2">
                <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="Full Name"
                    required
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Please enter your Full Name.</div>
            </div>
            <div className="col-md-12 mb-2">
                <input
                    type="email"
                    className="form-control"
                    id="validationCustomEmail"
                    placeholder="Email"
                    required
                />
                <div className="invalid-feedback">Please enter a valid email address.</div>
            </div>
            <div className="col-md-12 mb-2">
                <textarea
                    className="form-control"
                    id="validationCustomMessage"
                    placeholder="Your message"
                    rows="4"
                    required
                ></textarea>
                <div className="invalid-feedback">Please enter a message.</div>
            </div>
            <div className="col-md-12 mb-2">
                <input
                    type="tel"
                    className="form-control"
                    id="validationCustomPhone"
                    placeholder="Phone Number"
                />
                <div className="invalid-feedback">Please enter a valid phone number.</div>
            </div>
            <div className="my-2">
                <button className="btn btn-outline-danger" type="submit">
                    Send Message
                </button>
            </div>
        </form>
    </div>
    </>
    )
}