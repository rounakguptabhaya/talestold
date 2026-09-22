import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const EnquiryForm = () => {
    const productData = JSON.parse(sessionStorage.getItem("productData"));

    console.log(productData);

    // Formspree form ID
    const [state, handleSubmit] = useForm("xgaegpkg");

    // Show success message after successful submission
    if (state.succeeded) {
        return (
            <div className="about_content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div
                                className="contact-sec"
                                id="contact-sec"
                                style={{
                                    padding: "80px 20px",
                                    textAlign: "center",
                                }}
                            >
                                <div className="enquiry-container">
                                    <div className="contact-box enquiry-contact-box">
                                        <div className="c-box">
                                            <h4 className="small-heading">
                                                Thank You!
                                            </h4>

                                            <p className="small-text">
                                                Your enquiry has been sent
                                                successfully.
                                            </p>

                                            <p className="small-text">
                                                We will get back to you soon.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="about_content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <div className="product-body">

                                {/* PRODUCT DETAILS */}
                                <div className="pro-detail-sec row">
                                    <div className="col-12">

                                        <h4 className="pro-heading text-center text-lg-left">
                                            {productData.name}
                                        </h4>

                                        <h4 className="pro-heading text-center text-lg-left">
                                            <span
                                                style={{
                                                    color: "#ff1492",
                                                    fontSize: "20px",
                                                }}
                                            >
                                                ({productData.dim})
                                            </span>
                                        </h4>

                                        <p className="pro-text text-center text-lg-left">
                                            {productData.description.oneLiner}
                                        </p>

                                    </div>
                                </div>

                                <div className="row product-list product-detail">

                                    {/* PRODUCT IMAGE */}
                                    <div className="col-12 col-lg-6 product-detail-slider">

                                        <div className="swiper-wrapper myimgs">

                                            <div className="swiper-slide">
                                                <a
                                                    href={`images/${productData.name}.${productData.ext}`}
                                                    data-fancybox="1"
                                                    title="Zoom In"
                                                >
                                                    <img
                                                        className="myimage"
                                                        src={`images/${productData.name}.${productData.ext}`}
                                                        alt={productData.name}
                                                    />
                                                </a>
                                            </div>

                                        </div>

                                    </div>

                                    {/* PRODUCT INFORMATION + ENQUIRY */}
                                    <div className="col-12 col-lg-6 text-center text-lg-left">

                                        {/* PRICE */}
                                        <div className="product-single-price">
                                            <h4>
                                                <span className="real-price">
                                                    {productData.price}
                                                </span>
                                            </h4>
                                        </div>

                                        {/* PRODUCT DETAILS */}
                                        <div className="product-checklist">
                                            <ul>

                                                {productData.description &&
                                                    Object.entries(
                                                        productData.description
                                                    ).map(([key, value]) => {

                                                        if (
                                                            key === "oneLiner" ||
                                                            key === "dim"
                                                        ) {
                                                            return null;
                                                        }

                                                        return (
                                                            <li key={key}>
                                                                <i className="fas fa-circle"></i>{" "}
                                                                {value}
                                                            </li>
                                                        );
                                                    })}

                                            </ul>
                                        </div>

                                        {/* ENQUIRY FORM */}
                                        <section
                                            className="contact-sec"
                                            id="contact-sec"
                                        >
                                            <div className="container">

                                                <div className="enquiry-container">

                                                    <div className="col-12 contact-box enquiry-contact-box text-center text-md-left">

                                                        <div className="c-box">

                                                            <h4 className="small-heading">
                                                                Fill the below details
                                                            </h4>

                                                            <p className="small-text">
                                                                Enquiry for{" "}
                                                                {productData.name}.
                                                            </p>

                                                            <form
                                                                className="contact-form"
                                                                id="contact-form-data"
                                                                onSubmit={handleSubmit}
                                                            >

                                                                <div className="row my-form">

                                                                    {/* FORM ERROR */}
                                                                    <div className="col-md-12 col-sm-12">

                                                                        {state.errors &&
                                                                            state.errors.getFormErrors().map(
                                                                                (error) => (
                                                                                    <p
                                                                                        key={
                                                                                            error.code
                                                                                        }
                                                                                        className="text-danger"
                                                                                    >
                                                                                        {
                                                                                            error.message
                                                                                        }
                                                                                    </p>
                                                                                )
                                                                            )}

                                                                    </div>

                                                                    {/* FIRST NAME */}
                                                                    <div className="col-12 col-md-6">

                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="candidate_fname"
                                                                            name="firstName"
                                                                            placeholder="First Name"
                                                                            required
                                                                        />

                                                                        <ValidationError
                                                                            prefix="First Name"
                                                                            field="firstName"
                                                                            errors={state.errors}
                                                                        />

                                                                    </div>

                                                                    {/* LAST NAME */}
                                                                    <div className="col-12 col-md-6">

                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="candidate_lname"
                                                                            name="lastName"
                                                                            placeholder="Last Name"
                                                                            required
                                                                        />

                                                                        <ValidationError
                                                                            prefix="Last Name"
                                                                            field="lastName"
                                                                            errors={state.errors}
                                                                        />

                                                                    </div>

                                                                    {/* EMAIL */}
                                                                    <div className="col-12 col-md-6">

                                                                        <input
                                                                            type="email"
                                                                            className="form-control"
                                                                            id="user_email"
                                                                            name="email"
                                                                            placeholder="Email"
                                                                            required
                                                                        />

                                                                        <ValidationError
                                                                            prefix="Email"
                                                                            field="email"
                                                                            errors={state.errors}
                                                                        />

                                                                    </div>

                                                                    {/* SUBJECT */}
                                                                    <div className="col-12 col-md-6">

                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="user_subject"
                                                                            name="subject"
                                                                            placeholder="Subject"
                                                                            required
                                                                        />

                                                                        <ValidationError
                                                                            prefix="Subject"
                                                                            field="subject"
                                                                            errors={state.errors}
                                                                        />

                                                                    </div>

                                                                    {/* PRODUCT NAME */}
                                                                    <div className="col-12">

                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="product"
                                                                            name="product"
                                                                            value={`Enquiry for ${productData.name}`}
                                                                            readOnly
                                                                            hidden
                                                                        />

                                                                    </div>

                                                                    {/* MESSAGE */}
                                                                    <div className="col-12">

                                                                        <textarea
                                                                            className="form-control"
                                                                            id="user_message"
                                                                            name="message"
                                                                            placeholder="Message"
                                                                            rows="7"
                                                                            required
                                                                        ></textarea>

                                                                        <ValidationError
                                                                            prefix="Message"
                                                                            field="message"
                                                                            errors={state.errors}
                                                                        />

                                                                    </div>

                                                                    {/* SUBMIT BUTTON */}
                                                                    <div className="col-12">

                                                                        <button
                                                                            className="btn web-btn user-contact rounded-pill contact_btn"
                                                                            type="submit"
                                                                            disabled={
                                                                                state.submitting
                                                                            }
                                                                        >
                                                                            {state.submitting
                                                                                ? "SUBMITTING..."
                                                                                : "SUBMIT"}
                                                                        </button>

                                                                    </div>

                                                                </div>

                                                            </form>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                        </section>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnquiryForm;