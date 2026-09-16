import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from '../reducer/filterReducer'
import { useProductContext } from "./productContext";

const FilterContext = createContext();

const initialState = {
    filterProducts: [],
    allProducts: [],
    filters: {
      category: "all",
    }
}

export const FilterContextProvider = ({ children }) => {

//   const [loading, setLoading] = useState(true);
  

  const {products} = useProductContext()

  const [state, dispatch] = useReducer(reducer, initialState)

  const updateFilterValue = (event) => {
    event.preventDefault();
    // console.log(event.target.getAttribute('data-name'));
    // console.log(event.target.getAttribute('data-value'));
    window.scrollTo({
      top: 250,
      behavior: 'smooth', 
    });
    
    let name = event.target.getAttribute('data-name');
    let value = event.target.getAttribute('data-value');

    return dispatch({type: "UPDATE_FILTER_VALUE", payload: {name,value}})
  }

  useEffect(() => {
    dispatch({type: "FILTER_PRODUCTS"});
  },[products, state.filters])

  useEffect(() => {
    dispatch({type:"LOAD_FILTER_PRODUCTS", payload: products});    
  },[products])

  return (
    <FilterContext.Provider value={{ ...state, updateFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};


export const useFilterContext = () => {
    return useContext(FilterContext);
}