const ProductReducer = (state, action) => {
    if (action.type === 'PRODUCTS') {
        const featureData = action.payload.filter((product) => {
            return product.featured === true;
        })

        return {
            ...state,
            isLoading: false,
            products: action.payload,
            featuredProducts: featureData,
        }
    }

    return state;
}

export default ProductReducer;