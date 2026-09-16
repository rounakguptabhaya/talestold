import { useEffect, useState } from 'react';
import { useProductContext } from './contexts/productContext';
import ProdCard from './Components/ProdCard';
import Category from './Components/Category';
import { useFilterContext } from './contexts/filterContext.jsx';
import PageRibbon from './Components/PageRibbon.jsx';

const Products = () => {
    const { filterProducts } = useFilterContext();
    const { products } = useProductContext();

    const [isMobile, setIsMobile] = useState(
            typeof window !== "undefined" ? window.innerWidth < 768 : false
        );
    
        useEffect(() => {
            const handleResize = () => setIsMobile(window.innerWidth < 768);
    
            window.addEventListener("resize", handleResize);
    
            return () => window.removeEventListener("resize", handleResize);
        }, []);


    const getCategory = (products) => {
        const categoryMap = products.map(product => {
            return product.category;
        });

        return ['All', ...new Set(categoryMap)];
    };

    const categories = getCategory(products);

    return (
        <div>
            {!isMobile && <PageRibbon />}

            <div className="product-listing">
                <div className="container">
                    <div className="row no-gutters">

                        <Category categories={categories} />

                        <div className="col-md-12 col-lg-8 order-1 order-lg-2">
                            <div className="row">

                                <div className="col-12 product-listing-heading">
                                    <h1 className="heading text-left">
                                        Product Listing
                                    </h1>

                                    <p className="para_text text-left">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. tellus lacus faucibus
                                        lectus, sed cursused eros ligula non odio.
                                    </p>
                                </div>

                                <div className="col-12 product-listing-products">
                                    <div className="product-list row">

                                        {filterProducts.map((product) => (
                                            <ProdCard
                                                key={product.id}
                                                name={product.name}
                                                ext={product.ext}
                                            />
                                        ))}

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

export default Products;
