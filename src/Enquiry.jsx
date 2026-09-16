import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import Standalone from "./components/Standalone";
import EnquiryForm from "./Components/EnquiryForm";

const Enquiry = () => {
    const location = useLocation();
    const {id,name,category} = location.state || {};
    

    return(
        <div>
            {/* <Standalone title="Enquiry" link="enquiry"/> */}
            <div className="paralax-section-slide-data1" style={{ backgroundImage: "url('images/standaloneBanner.avif')" }}>
                {/* <h2 className="">Product Listing</h2> */}
            </div>
            <EnquiryForm product={name} />
        </div>
    )
}

export default Enquiry;