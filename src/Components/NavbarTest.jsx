import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NavbarTest = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.classList.remove('overflow-hidden');
    };

    useEffect(() => {
        closeMobileMenu();
    }, [location.pathname]);

    return (
        <div>
            <div className="header-area">
                <div className="container">
                    <div className="row upper-nav">

                        <div className="col-3 nav-icon pt-3">
                            <ul className="social-icons-simple text-left">
                                {/* <li><a href="javascript:void(0)" className="facebook-bg-hvr"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li> */}
                                {/* <li><a href="javascript:void(0)" className="twitter-bg-hvr"><i className="fab fa-twitter" aria-hidden="true"></i></a> </li> */}
                                <li><a href="https://www.instagram.com/sgb_tales?stkn=MWs1bXBqNmFveHd5&utm_source=qr" target="_blank" className="instagram-bg-hvr"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-6 text-center nav-logo">
                            <a href="index-shop.html" className="navbar-brand"><img src="images/logo2.png" alt="img" /></a>
                            {/* <h2>TalesTold</h2> */}
                        </div>

                        {/* <div className="col-3 nav-utility text-right d-flex justify-content-end align-items-center pt-3">
                            <div className="manage-icons d-inline-block">
                                <ul>
                                    <li className="d-inline-block">
                                        <a id="add_search_box">
                                            <i className="fas fa-search search-sidebar-hover"></i>
                                        </a>
                                    </li>
                                    <li className="d-inline-block mini-menu-card" id="mini-menu-card">
                                        <a className="nav-link collapsePagesSideMenu" data-toggle="collapse" href="#sideNavPages4">
                                            <i className="fas fa-shopping-cart"></i>
                                        </a>
                                        <div id="sideNavPages4" className="collapse sideNavPages shopping-cart">
                                            <i className="fas fa-caret-up mini-cart-caret"></i>
                                            <div className="mini-cart-header text-left">
                                                <h4>Shopping Cart</h4>
                                            </div>
                                            <div className="mini-cart-body">
                                                <div className="inner-card">
                                                    <div className="media">
                                                        <div className="img-holder ml-1 mr-2">
                                                            <a href="#"><img src="shop/img/product-listing/p42.1.jpg" className="align-self-center" alt="cartitem" /></a>
                                                        </div>
                                                        <div className="media-body mt-auto mb-auto">
                                                            <h5 className="name"><a href="#">light wear</a></h5>
                                                            <p className="category">light wear Lastest</p>
                                                            <p className="price"><span>$20</span>(x1) <a href="#"> <i className="fa fa-trash dustbin"></i></a></p>
                                                        </div>
                                                    </div>
                                                    <div className="media">
                                                        <div className="img-holder ml-1 mr-2">
                                                            <a href="#"><img src="shop/img/product-listing/p44.jpg" className="align-self-center" alt="cartitem" /></a>
                                                        </div>
                                                        <div className="media-body mt-auto mb-auto">
                                                            <h5 className="name"><a href="#">Casual wear</a></h5>
                                                            <p className="category">Casual wear Lastest</p>
                                                            <p className="price"><span>$20</span>(x1) <a href="#"> <i className="fa fa-trash dustbin"></i></a></p>
                                                        </div>
                                                    </div>
                                                    <div className="media">
                                                        <div className="img-holder ml-1 mr-2">
                                                            <a href="#"><img src="shop/img/product-listing/p29.jpg" className="align-self-center" alt="cartitem" /></a>
                                                        </div>
                                                        <div className="media-body mt-auto mb-auto">
                                                            <h5 className="name"><a href="#">long Frock</a></h5>
                                                            <p className="category">long Frock Lastest</p>
                                                            <p className="price"><span>$20</span>(x1) <a href="#"> <i className="fa fa-trash dustbin"></i></a></p>
                                                        </div>
                                                    </div>
                                                    <div className="media">
                                                        <div className="img-holder ml-1 mr-2">
                                                            <a href="#"><img src="shop/img/product-listing/p43.jpg" className="align-self-center" alt="cartitem" /></a>
                                                        </div>
                                                        <div className="media-body mt-auto mb-auto">
                                                            <h5 className="name"><a href="#">Long shirt</a></h5>
                                                            <p className="category">Log shirt Lastest</p>
                                                            <p className="price"><span>$20</span>(x1) <a href="#"> <i className="fa fa-trash dustbin"></i></a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mini-cart-footer">
                                                <div className="subtotal text-center">
                                                    <span className="total-title">Total: </span>
                                                    <span className="total-price">
                                                        <span className="Price-amount">
                                                            $135
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="actions text-center">
                                                    <a href="shop/shop-cart.html" className="btn pink-gradient-btn-into-black">View Bag</a>
                                                    <a href="shop/shop-cart.html" className="btn pink-gradient-btn-into-transparent">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-inline-block simple-dropdown" id="mini-menu">
                                        <a className="nav-link collapsePagesSideMenu" data-toggle="collapse" href="#sideNavPages5">
                                            <i className="fas fa-th"></i>
                                        </a>

                                        <div id="sideNavPages5" className="collapse sideNavPages user-utiliity">
                                            <i className="fas fa-caret-up user-utiliity-caret"></i>
                                            <h6 className="user-utiliity-title">MY ACCOUNT </h6>
                                            <hr />
                                            <ul className="text-left">
                                                <li>
                                                    <a href="shop/register.html">Register</a>
                                                </li>
                                                <li>
                                                    <a href="shop/login.html">Login</a>
                                                </li>
                                            </ul>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                        </div> */}

                        <div className="col-12 nav-mega">
                            <header className="site-header" id="header">
                                <nav className="navbar navbar-expand-md  static-nav">
                                    <div className="container position-relative megamenu-custom">
                                        <a className="navbar-brand center-brand" href="index.html">
                                            <img src="shop/img/logo.jpg" alt="logo" className="logo-scrolled" />
                                        </a>
                                        <div className="collapse navbar-collapse">
                                            <ul className="navbar-nav ml-auto mr-auto">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/">HOME</a>
                                                </li>
                                                {/* <NavLink to="/products" className="nav-link">PRODUCTS</NavLink> */}
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/products">PRODUCTS</a>
                                                </li>
                                                {/* <li className="nav-item dropdown static">
                                        <a className="nav-link dropdown-toggle active" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> WOMEN </a>
                                        <ul className="dropdown-menu megamenu flexable-megamenu">
                                            <li>
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6 col-sm-12 mengmenu_border">
                                                            <h5 className="dropdown-title"> Most Wanted </h5>
                                                            <ul>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">WomensWear</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">classNameic Dress</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Nightwear</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Active wear</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Footwear / Shoes</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Coats / Outerwear</a></li>
                                                            </ul>
                                                            <h5 className="dropdown-title"> Babies </h5>
                                                            <ul>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Baby Clothes</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Baby Footwear</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Sleep Suits</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Socks And Tights</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12 mengmenu_border">
                                                            <h5 className="dropdown-title"> All Accessories </h5>
                                                            <ul>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Hand Bags</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Belts</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Jewellery</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Scarves</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Sun Glasses</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Others</a></li>
                                                            </ul>

                                                            <h5 className="dropdown-title"> Shop Collections </h5>
                                                            <ul>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Holiday Shop</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Gifts</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Workwear Range</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Essential</a></li>
                                                            </ul>

                                                        </div>

                                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                                            <h5 className="dropdown-title text-left">Featured Items </h5>
                                                            <div className="carousel-menu mt-4">
                                                                <div className="featured-megamenu-carousel owl-carousel owl-theme">
                                                                    <div className="item ">
                                                                        <img src="shop/img/shop1.jpg" alt="shop-image" />
                                                                    </div>
                                                                    <div className="item">
                                                                        <img src="shop/img/shop2.jpg"  alt="shop-image" />
                                                                    </div>
                                                                </div>
                                                                <i className="lni-chevron-left ini-customPrevBtn"></i>
                                                                <i className="lni-chevron-right ini-customNextBtn"></i>
                                                            </div>
                                                            <p className="mt-4 megamenu-slider-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                                            <a href="shop/product-listing.html" className="btn trans-pink-color-gradient-btn slider-btn text-left">Shop Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li> */}
                                                {/* <li className="nav-item">
                                                    <a className="nav-link" href="index-shop.html">ABOUT US</a>
                                                </li> */}
                                                {/* <li className="nav-item dropdown static">
                                        <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> CLOTHES </a>
                                        <ul className="dropdown-menu megamenu flexable-megamenu">
                                            <li>
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6 col-sm-12 mengmenu_border">
                                                            <h5 className="dropdown-title bottom10"> General </h5>

                                                            <ul>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Dresses</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Hoodies & Sweatshirts</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Top</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Shoes & Trainers</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Jeans</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Shorts</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Loungewear</a></li>

                                                            </ul>

                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12 mengmenu_border">
                                                            <h5 className="dropdown-title opacity-10"> Others </h5>
                                                            <ul>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">All Clothing</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i> <a className="dropdown-item" href="shop/product-listing.html">Shoes</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i> <a className="dropdown-item" href="shop/product-listing.html">ActiveWear</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Treading Now</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Accessories
                                                                </a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Face + Body</a></li>
                                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Back in stock</a></li>
                                                            </ul>

                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12 mengmenu_border">
                                                            <h5 className="dropdown-title bottom10"> Outlet </h5>

                                                            <div className="media outlet-media mt-3">
                                                                <div className="box">
                                                                    <img className="align-self-start" src="shop/img/product-listing/p42.1.jpg" alt="Generic placeholder image" />
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mt-3 ml-3"><a href="shop/product-listing.html">Modest Fashion</a></h6>
                                                                </div>
                                                            </div>

                                                            <div className="media outlet-media">
                                                                <div className="box">
                                                                    <img className="align-self-start" src="shop/img/product-listing/p54.jpg" alt="Generic placeholder image" />
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mt-3 ml-3"><a href="shop/product-listing.html">Responsible Edit</a></h6>
                                                                </div>
                                                            </div>

                                                            <div className="media outlet-media">
                                                                <div className="box">
                                                                    <img className="align-self-start" src="shop/img/product-listing/p49.jpg" alt="Generic placeholder image" />
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mt-3 ml-3"><a href="shop/product-listing.html">Going Out</a></h6>
                                                                </div>
                                                            </div>


                                                            <div className="media outlet-media">
                                                                <div className="box">
                                                                    <img className="align-self-start" src="shop/img/product-listing/p6.jpg" alt="Generic placeholder image" />
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mt-3 ml-3"><a href="shop/product-listing.html">Holiday</a></h6>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12 pt-3">

                                                            <a href="javascript:void(0);"><img src="shop/img/product-listing/p10.jpg" alt="image" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li> */}
                                                {/* <li className="nav-item dropdown position-relative">
                                        <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PAGES</a>
                                        <div className="dropdown-menu">
                                            <ul>
                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-listing.html">Listing One</a></li>
                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/product-detail.html">Detail Page</a></li>
                                                <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="shop/standalone.html">StandAlone Page</a></li>
                                            </ul>
                                        </div>
                                    </li> */}
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/contact">CONTACT</a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <button type="button" className="d-inline-block sidemenu_btn d-lg-none d-md-block" id="sidemenu_toggle" onClick={() => {
                                        setIsMobileMenuOpen((isOpen) => {
                                            document.body.classList.toggle('overflow-hidden', !isOpen);
                                            return !isOpen;
                                        });
                                    }} aria-label="Toggle navigation menu">
                                        <span></span> <span></span> <span></span>
                                    </button>
                                </nav>


                                <div className={`side-menu gradient-bg ${isMobileMenuOpen ? 'side-menu-active' : ''}`}>
                                    <div className="inner-wrapper">
                                        <span className="btn-close btn-close-no-padding" id="btn_sideNavClose" onClick={closeMobileMenu}><i></i><i></i></span>
                                        <nav className="side-nav w-100">
                                            <ul className="navbar-nav">

                                                <li className="nav-item">
                                                    <a className="nav-link" href="/home" onClick={closeMobileMenu}> Home</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/products" onClick={closeMobileMenu}> Products</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/contact" onClick={closeMobileMenu}> Contact us</a>
                                                </li>
                                                
                                            </ul>
                                        </nav>
                                        <div className="side-footer w-100">
                                            <ul className="social-icons-simple white top40">
                                                {/* <li><a className="facebook-bg-hvr" href="javascript:void(0)"><i className="fab fa-facebook-f"></i> </a> </li> */}
                                                {/* <li><a className="twitter-bg-hvr" href="javascript:void(0)"><i className="fab fa-twitter"></i> </a> </li> */}
                                                <li><a className="instagram-bg-hvr" target="_blank" href="https://www.instagram.com/sgb_tales?stkn=MWs1bXBqNmFveHd5&utm_source=qr"><i className="fab fa-instagram"></i> </a> </li>
                                            </ul>
                                            <p className="whitecolor">&copy; <span id="year"></span> Product Shop. Made With Love by ThemesIndustry</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="close_side_menu" className="tooltip" onClick={closeMobileMenu} style={{ display: isMobileMenuOpen ? 'block' : 'none' }}></div>
                            </header>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavbarTest;