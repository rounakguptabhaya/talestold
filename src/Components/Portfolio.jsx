import { useEffect, useRef, useState, } from 'react';
import { useProductContext } from '../contexts/productContext.jsx';
import ProductCard from './ProductCard.jsx';

const Portfolio = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const { featuredProducts, isLoading } = useProductContext();

    console.log(featuredProducts);
    console.log(isLoading);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;

            if (!section || window.scrollY === 0) return;

            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop <= window.innerHeight * 0.85) {
                setIsVisible(true);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }



    return (
        <div ref={sectionRef} className="portfolio-section">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <div className="portfolioHeading text-center">
                            <h1 className="high-lighted-heading">Our Product</h1>
                            {/* <p>Aenean imperdiet. Etiam ultricies nisi vel augue men tuhi spectrum alle me.</p> */}
                        </div>
                    </div>

                    {/* <div className="col-12">
                <div className="clearfix d-flex justify-content-center">
                    <div id="js-filters-blog-posts" className="cbp-l-filters-button cbp-1-filters-alignCenter">
                        <div data-filter="*" className="cbp-filter-item-active cbp-filter-item cbp-l-filters-list-first">All </div>
                        <div data-filter=".CausalShirts" className="cbp-filter-item">Causal Shirts </div>
                        <div data-filter=".formalShirts" className="cbp-filter-item">Formal Shirts </div>
                        <div data-filter=".others" className="cbp-filter-item cbp-l-filters-list-last">Others </div>
                    </div>
                </div>
            </div> */}

                    <div className="col-12">
                        <div className="portfolio-products-grid">

                            {featuredProducts.map((product) => {
                                return <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    ext={product.ext}
                                    category={product.category}
                                    description={product.description}
                                    isVisible={isVisible}
                                />
                            })}

                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="/products" className="btn trans-pink-color-gradient-btn slider-btn text-left my-5">Load more</a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Portfolio;