const Navbar = () => {
    return (
        <header id="home" className="mega-elements cursor-light">
    <div className="inner-header nav-icon">
        <div className="main-navigation">
            <div className="container">
                <div className="row">
                    <div className="col-8 col-lg-10 simple-navbar d-flex align-items-center justify-content-start">
                        <a className="navbar-brand" href="../index-kindergarten.html#banner">
                            <img src="/images/logo.png" className="logo-simple" alt="logo" />
                            <img src="/images/logo.png" className="dual-simple" alt="logo" />
                        </a>
                        <nav className="navbar navbar-expand-lg">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="navbar-nav ml-auto">
                                    <a className="nav-link" href="../index-kindergarten.html#about">About</a>
                                    <a className="nav-link " href="../index-kindergarten.html#company-portfolio-section">KG Gallery</a>
                                    <a className="nav-link" href="../index-kindergarten.html#testimonial-sec">Reviews</a>
                                    <a className="nav-link" href="../index-kindergarten.html#contact-sec">Contact</a>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="col-lg-2 px-0 simple-navbar align-items-center justify-content-end d-none d-lg-flex">
                        <div className="navbar-social side-icons d-flex justify-content-center">
                            <a className="social-icon" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="social-icon" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="social-icon" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="social-icon" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a href="#" className="sidemenu_btn link" id="sidemenu_toggle">
            <span></span>
            <span></span>
        </a>
    </div>
    <div className="side-menu hidden side-menu-opacity">
        <div className="inner-wrapper">
            <span className="btn-close" id="btn_sideNavClose"><i></i><i></i></span>
            <a href="../index-kindergarten.html#banner" className="navbar-brand side-logo">
                <img src="/images/logo.png" alt="logo" />
            </a>
            <nav className="side-nav w-100">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="../index-kindergarten.html#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../index-kindergarten.html#company-portfolio-section">KG Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../index-kindergarten.html#testimonial-sec">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../index-kindergarten.html#contact-sec">Contact</a>
                    </li>
                    
                </ul>
            </nav>

            <div className="side-footer text-white w-100 mb-5 d-flex justify-content-center">
                <ul className="social-icons-simple">
                    <li><a className="facebook-text-hvr" href="#"><i className="fab fa-facebook-f"></i> </a> </li>
                    <li><a className="twitter-text-hvr" href="#"><i className="fab fa-twitter"></i> </a> </li>
                    <li><a className="linkedin-text-hvr" href="#"><i className="fab fa-linkedin-in"></i> </a> </li>
                    <li><a className="instagram-text-hvr" href="#"><i className="fab fa-instagram"></i> </a> </li>
                </ul>
            </div>
        </div>

        <svg className="separator__svg" id="side-menu-svg" width="100%"  viewBox="0 0 100 100" preserveAspectRatio="none" fill="#fff" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M 100 100 V 10 L 0 100"/>
            <path d="M 30 73 L 100 18 V 10 Z" fill="#fff" strokeWidth="0"/>
        </svg>
    </div>
    <a id="close_side_menu" href="#"></a>
</header>
    )
}

export default Navbar