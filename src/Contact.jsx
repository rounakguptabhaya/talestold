import Map from "./Components/Map.jsx";

const Contact = () => {
    return (
        <div>
            <section className="contact-sec" id="contact-sec">

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 contact-description">
                            <div className="contact-detail">
                                <div className="ex-detail">
                                    <span className="fly-text">CONTACT US</span>
                                    <h4 className="large-heading">
                                        <span className="heading-1">Get</span>
                                        <span className="heading-2">In Touch</span>
                                    </h4>
                                </div>
                                <p className="small-text text-center text-md-left">
                                    We’d love to hear from you. Reach out to our team using the contact details below, and we’ll get back to you shortly.
                                </p>
                                <div className="row location-details text-center text-md-left">
                                    <div className="col-12 col-md-6 country-1">
                                        <h4 className="heading-text text-left">India</h4>
                                        <ul>
                                            <li><i className="fas fa-mobile-alt"></i><a href="tel:+91 86979 16201">+(91) 86979 16201</a></li>
                                            <li><i className="fas fa-envelope"></i><a href="mailto:talestoldart@gmail.com">talestoldart@gmail.com</a></li>
                                            <li><i className="fas fa-map-marker"></i><a href="https://www.google.com/maps/search/?api=1&amp;query=201+Oak+Street+27+Manchester+USA">FE Block, Salt Lake City, Kolkata</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 contact-box text-center text-md-left">
                            <div className="c-box">
                                <h4 className="small-heading">Leave Message</h4>
                                <form className="contact-form" id="contact-form-data" action="https://formspree.io/f/xgaegpkg" method="POST"  >
                                    <div className="row my-form">
                                        <div className="col-md-12 col-sm-12">
                                            <div id="result"></div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input type="text" className="form-control" id="candidate_fname" name="firstName" placeholder="First Name" required="required" />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input type="text" className="form-control" id="candidate_lname" name="lastName" placeholder="Last Name" required="required" />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input type="email" className="form-control" id="user_email" name="email" placeholder="Email" required="required" />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input type="text" className="form-control" id="user_subject" name="subject" placeholder="Subject" required="required" />
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control" id="user_message" name="userMessage" placeholder="Message" rows="7" required="required"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn pink-gradient-btn-into-black user-contact contact_btn">SUBMIT</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Map />
        </div>

    )
}

export default Contact;