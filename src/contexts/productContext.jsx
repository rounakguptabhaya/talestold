import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/productReducer.jsx";

const AppContext = createContext();

const initialState = {
    isLoading: true,
    isError: false,
    products: [],
    featuredProducts: [],
}

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const products = [
        {
            id: '1',
            name: 'product1',
            description: '',
            category: 'Paintings',
            ext: 'jpg',
            featured: false,
        },
        {
            id: '2',
            name: 'product2',
            description: '',
            category: 'Paintings',
            ext: 'jpg',
            featured: false,
        },
        {
            id: '3',
            name: 'product3',
            description: '',
            category: 'Paintings',
            ext: 'jpg',
            featured: false,
        },
        {
            id: '4',
            name: 'product4',
            description: '',
            category: 'Paintings',
            ext: 'jpg',
            featured: true,
        },
        {
            id: '5',
            name: 'product5',
            description: '',
            category: 'Paintings',
            ext: 'jpg',
            featured: true,
        },
        {
            id: '6',
            name: 'product6',
            description: '',
            category: 'Paintings',
            ext: 'jpg',
            featured: true,
        },
        {
            id: '7',
            name: 'Phoenix',
            category: 'Wall Decor',
            ext: 'PNG',
            featured: false,
        }
    ]

    const getProducts = () => {
        dispatch({ type: "PRODUCTS", payload: products });
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    )
};

const useProductContext = () => {
    return useContext(AppContext);
}

export {AppContext, useProductContext};