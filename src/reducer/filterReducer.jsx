const FilterReducer = (state, action) => {
    if(action.type === 'LOAD_FILTER_PRODUCTS'){
        return{
            ...state,
            filterProducts: [...action.payload],
            allProducts: [...action.payload],
        }
    }
    if(action.type === 'UPDATE_FILTER_VALUE'){
        const {name, value} = action.payload;

        return {
            ...state,
            filters: {
                ...state.filters,
                [name]: value
            }
        }
    }
    if(action.type === 'FILTER_PRODUCTS'){
        let {allProducts } = state;
        let tempFilterProduct = [...allProducts]

        const {category} = state.filters;


        if(category != "All"){
            tempFilterProduct = tempFilterProduct.filter((product) => {
                return product.category === category;
            })
        }
        
        return {
            ...state,
            filterProducts: tempFilterProduct,
        }

    }
}

export default FilterReducer;