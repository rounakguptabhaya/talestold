import React from "react";

const EnquiryForm = () => {
  const productData = JSON.parse(sessionStorage.getItem('productData'));
  
  return (
    <section class="contact-sec" id="contact-sec">
      <div className="container">
        <div className="enquiry-container">
          <div
            class="col-12 col-lg-6 contact-box text-center text-md-left wow slideInRight"
            data-wow-delay=".8s"
          >
            <div class="c-box wow fadeInRight">
              <h4 class="small-heading">Leave Message</h4>
              <p class="small-text">
                Enquiry for {productData.name}.
              </p>
              <form class="contact-form" id="contact-form-data" action="https://formspree.io/f/mdknvwpd" method="POST">
                <div class="row my-form">
                  <div class="col-md-12 col-sm-12">
                    <div id="result"></div>
                  </div>
                  <div class="col-12 col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="candidate_fname"
                      name="First Name"
                      placeholder="First Name"
                      required="required"
                    />
                  </div>
                  <div class="col-12 col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="candidate_lname"
                      name="Last Name"
                      placeholder="Last Name"
                      required="required"
                    />
                  </div>
                  <div class="col-12 col-md-6">
                    <input
                      type="email"
                      class="form-control"
                      id="user_email"
                      name="User Email"
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                  <div class="col-12 col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="user_subject"
                      name="User Subject"
                      placeholder="Subject"
                      required="required"
                    />
                  </div>
                  <div class="col-12 col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="user_subject"
                      name="Form Title"
                      placeholder="Product"
                      required="required"
                      value={`Enquiry for `+productData.name}
                      readOnly
                      hidden
                    />
                  </div>
                  <div class="col-12">
                    <textarea
                      class="form-control"
                      id="user_message"
                      name="User Message"
                      placeholder="Message"
                      rows="7"
                      required="required"
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <button
                      class="btn web-btn user-contact rounded-pill contact_btn"
                      type="submit"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
