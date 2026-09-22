const ProductCard = ({ name, price, ext, isVisible, id, category, description, dim }) => {
    // console.log("product:", product);
    console.log(description);
    

    const handleEnquiryClick = (event) => {
      event.preventDefault();
      // Storing state data in sessionStorage
      sessionStorage.setItem('productData', JSON.stringify({ id, name, category, price, ext, description, dim }));
      window.location.href = "/enquiry";
    };

    return (
        <div className={`cbp-item CausalShirts others ${isVisible ? 'animated slideInUp' : ''}`}>
            <a className="portfolio-circle-cart" href="#" onClick={handleEnquiryClick}>
                <i className="fa fa-shopping-cart"></i>
            </a>
            <div className="portfolio-product-image">
                <div className="item"> <a href="#" onClick={handleEnquiryClick} className="cbp-caption" data-fancybox="gallery1" data-title="Shirt Name"><img src={`/images/${name}.${ext}`} alt={name} /></a></div>
                {/* <div className="item"> <a href="shop/img/product-listing/p25.jpg" className="cbp-caption" data-fancybox="gallery1" data-title="Shirt Name"><img src="shop/img/product-listing/p25.jpg" alt="" /></a></div> */}
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <a href="#" onClick={handleEnquiryClick} className="cbp-l-grid-blog-title portfolio-title">{name} </a>
                </div>
                <div className="col-12 text-center">
                    <div className="cbp-l-grid-blog-desc portfolio-des">{price}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;