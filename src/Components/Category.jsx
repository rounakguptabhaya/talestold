
import { useFilterContext } from '../contexts/filterContext'

const Category = ({ categories }) => {

    const { updateFilterValue, allProducts, filters: { category } } = useFilterContext();
    return (
        <div className="col-12 col-lg-4 order-2 order-lg-1 sticky">
            <div id="product-filter-nav" className="product-filter-nav mb-3">
                <div className="product-category">
                    <h5 className="filter-heading  text-center text-lg-left">Category</h5>
                    <ul>
                        {categories.map((category, idx) => {
                            return <li key={idx}><a data-name= "category" data-value={category} onClick={updateFilterValue} href="#">{category}</a></li>
                        })}

                        {/* <li><a href="#">July </a><span>(4)</span></li>
                                        <li><a href="#">Augest </a><span>(2)</span></li>
                                        <li><a href="#">March </a><span>(7)</span></li>
                                        <li><a href="#">May </a><span>(9)</span></li> */}
                    </ul>
                </div>
                {/* <div className="product-price mt-1">
                                    <h5 className="filter-heading">Shop By</h5>
                                    <div id="slider-range"></div>
                                    <p className="price-num" style={{ color: '#0b2e13' }}>Price: <span id="min-p"></span>  <span id="max-p"></span></p>
                                </div> */}


                {/* <button className="btn pink-gradient-btn-into-black mt-1">Filter</button>

                                <div className="product-add mt-4">
                                    <div className="row no-gutters">
                                        <div className="col-12">
                                            <img src="img/advertisement.jpg" alt="images" />
                                        </div>
                                    </div>
                                </div> */}


            </div>
        </div>
    )
}

export default Category;