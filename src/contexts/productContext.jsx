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
            name: 'Grace',
            description: '',
            category: 'Paintings',
            ext: 'png',
            featured: false,
            price: '₹999',
        },
        {
            id: '2',
            name: 'Devi',
            description: '',
            category: 'Paintings',
            ext: 'png',
            featured: false,
            price: '₹1,499',
        },
        {
            id: '3',
            name: 'Abyss',
            description: '',
            category: 'Paintings',
            ext: 'jpg',
            featured: false,
            price: '₹999',
        },
        {
            id: '4',
            name: 'Radiance',
            description: '',
            category: 'Paintings',
            ext: 'png',
            featured: true,
            price: '₹1,299',
        },
        {
            id: '5',
            name: 'Reverie',
            description: '',
            category: 'Paintings',
            ext: 'jpg',
            featured: true,
            price: '₹1,499',
        },
        {
            id: '6',
            name: 'Melody',
            description: '',
            category: 'Paintings',
            ext: 'png',
            featured: true,
            price: '₹999',
        },
        {
            id: '7',
            name: 'Shiv Shakti',
            description: '',
            category: 'Wall Decor',
            ext: 'jpeg',
            featured: false,
            price: '₹7999',
        },
        {
            id: '8',
            name: 'Phoenix',
            category: 'Wall Decor',
            ext: 'jpeg',
            featured: false,
            price: '₹14,999',
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