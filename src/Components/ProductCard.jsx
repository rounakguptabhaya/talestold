const ProductCard = ({ name, isVisible }) => {
    // console.log("product:", product);
    return (
        <div className={`cbp-item CausalShirts others ${isVisible ? 'animated slideInUp' : ''}`}>
            <a className="portfolio-circle-cart" href="shop/shop-cart.html">
                <i className="fa fa-shopping-cart"></i>
            </a>
            <div className="portfolio-product-image">
                <div className="item"> <a href="shop/img/product-listing/p24.jpg" className="cbp-caption" data-fancybox="gallery1" data-title="Shirt Name"><img src={`/images/${name}.jpg`} alt={name} /></a></div>
                {/* <div className="item"> <a href="shop/img/product-listing/p25.jpg" className="cbp-caption" data-fancybox="gallery1" data-title="Shirt Name"><img src="shop/img/product-listing/p25.jpg" alt="" /></a></div> */}
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <a href="shop/product-detail.html" target="_blank" className="cbp-l-grid-blog-title portfolio-title">{name} </a>
                </div>
                <div className="col-12 text-center">
                    <div className="cbp-l-grid-blog-desc portfolio-des">$999.00</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;