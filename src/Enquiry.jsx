import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import Standalone from "./components/Standalone";
import EnquiryForm from "./Components/EnquiryForm";
import PageRibbon from "./Components/PageRibbon.jsx";

const Enquiry = () => {
    const location = useLocation();
    const {id,name,category} = location.state || {};
    

    return(
        <div>
            {/* <Standalone title="Enquiry" link="enquiry"/> */}
            <PageRibbon />
            <EnquiryForm product={name} />
        </div>
    )
}

export default Enquiry;