import { useProductContext } from './contexts/productContext';
import ProdCard from './Components/ProdCard';
import Category from './Components/Category';
import {useFilterContext} from './contexts/filterContext.jsx'

const Products = () => {
const {filterProducts, allProducts } = useFilterContext();

    const { products } = useProductContext();
    console.log(products);

    const getCategory = (products) => {
        let categoryMap = products.map(product => {
            return product.category;
        })
        // console.log(categoryMap);
        return (categoryMap = ['All', ...new Set(categoryMap)]);
    }

    const categories = getCategory(products);
    console.log(categories);
    

    return (
        <div>
            <div className="paralax-section-slide-data1" style={{ backgroundImage: "url('images/standaloneBanner.avif')" }}>
                {/* <h2 className="">Product Listing</h2> */}
            </div>

            <div className="product-listing">
                <div className="container">
                    <div className="row no-gutters">

                        <Category categories={categories}/>

                        <div className="col-md-12 col-lg-8 order-1 order-lg-2">
                            <div className="row">

                                <div className="col-12 product-listing-heading">
                                    <h1 className="heading text-left">Product Listing</h1>
                                    <p className="para_text text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. tellus lacus faucibus lectus, sed cursused eros ligula non odio.</p>
                                </div>



                                <div className="col-12 product-listing-products">

                                    <div className="product-list row">

                                        {filterProducts.map((product) => {
                                            return <ProdCard key={product.id} name={product.name} ext={product.ext} />
                                        })}

                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Products;