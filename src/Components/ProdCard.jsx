const ProdCard = ({name, ext, id, category, price}) => {

    const handleEnquiryClick = (event) => {
      event.preventDefault();
      // Storing state data in sessionStorage
      sessionStorage.setItem('productData', JSON.stringify({ id, name, category, price, ext }));
      window.location.href = "/enquiry";
    };
    
    return (
        <div className="col-12 col-md-6 col-lg-4 manage-color-hover wow slideInUp" data-wow-delay=".2s">
            <div className="product-item owl-theme product-listing-carousel">
                <div className="item p-item-img">
                    <img src={`images/${name}.${ext}`} alt="" />
                    <div className="text-center d-flex justify-content-center align-items-center">
                        <a className="listing-cart-icon" href="#" onClick={handleEnquiryClick}>
                            <i className="fa fa-shopping-cart"></i>
                        </a>
                    </div>
                </div>
                {/* <div className="item p-item-img">
                    <img src="img/product-listing/p48.jpg" alt="images" />
                    <div className="text-center d-flex justify-content-center align-items-center">
                        <a className="listing-cart-icon" href="shop-cart.html">
                            <i className="fa fa-shopping-cart"></i>
                        </a>
                    </div>
                </div> */}
            </div>
            <div className="p-item-detail mt-5">
                <h4 className="text-center p-item-name"><a href="#" onClick={handleEnquiryClick}> {name} </a></h4>
                <p className="text-center p-item-price">{price}</p>
            </div>
        </div>
    )
}

export default ProdCard;