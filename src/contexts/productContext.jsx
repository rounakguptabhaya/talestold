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
            category: 'Paintings',
            ext: 'png',
            featured: false,
            price: '₹999',
            description: {
                oneLiner: 'A bold celebration of feminine beauty and quiet confidence, where expressive color and striking eyes create a presence that is both powerful and refined.',
                medium: 'Brush Pen Artwork on Paper — Art Print',
                style: 'Contemporary Figurative',
                mood: 'Bold, Elegant, Confident',
                theme: 'Feminine Beauty, Self-Expression, Strength, Individuality',
            },
            dim: '10" x 8"',
        },
        {
            id: '2',
            name: 'Devi',
            category: 'Paintings',
            ext: 'png',
            featured: false,
            price: '₹1,499',
            description: {
                oneLiner: 'A graceful portrait of feminine strength and timeless beauty, where tradition, dignity, and quiet power come together.',
                medium: 'Acrylic on Canvas',
                style: 'Contemporary Figurative',
                mood: 'Graceful, Regal, Serene',
                theme: 'Feminine Strength, Tradition, Beauty, Inner Power',
            },
            dim: '10" x 8"',
        },
        {
            id: '3',
            name: 'Abyss',
            category: 'Paintings',
            ext: 'png',
            featured: false,
            price: '₹999',
            description: {
                oneLiner: 'Falling through shades of blue, each droplet becomes a quiet journey into the beautiful darkness of the unknown.',
                medium: 'Acrylic on Canvas',
                style: 'Contemporary Abstract',
                mood: 'Dreamlike, Mysterious, Introspective',
                theme: 'Depth, Solitude, The Unknown, Inner Exploration',
            },
            dim: '6" x 8"',
        },
        {
            id: '4',
            name: 'Radiance',
            category: 'Paintings',
            ext: 'png',
            featured: true,
            price: '₹1,299',
            description: {
                oneLiner: 'A luminous journey through the forest, where sunlight filters through layers of green, transforming the quiet depths of nature into a moment of pure brilliance.',
                medium: 'Acrylic on Canvas',
                style: 'Contemporary Landscape',
                mood: 'Serene, Luminous, Refreshing',
                theme: 'Nature, Light, Renewal, Tranquility',
            },
            dim: '8" x 10"',
        },
        {
            id: '5',
            name: 'Reverie',
            category: 'Paintings',
            ext: 'jpg',
            featured: true,
            price: '₹1,499',
            description: {
                oneLiner: 'A quiet portrait framed by delicate pink blossoms, capturing a moment of beauty, stillness, and gentle introspection.',
                medium: 'Acrylic on Canvas',
                style: 'Contemporary Figurative',
                mood: 'Serene, Soft, Introspective',
                theme: 'Beauty, Nature, Femininity, Inner Reflection',
            },
            dim: '6" x 8"',
        },
        {
            id: '6',
            name: 'Melody',
            category: 'Paintings',
            ext: 'png',
            featured: true,
            price: '₹999',
            description: {
                oneLiner: 'A vibrant scene of quiet rhythm, where a woman surrounded by books, warm light, and vivid colors becomes part of a story unfolding in stillness.',
                medium: 'Brush Pen Artwork on Paper — Art Print',
                style: 'Contemporary Figurative',
                mood: 'Warm, Reflective, Vibrant',
                theme: 'Stories, Tradition, Stillness, Everyday Beauty',
            },
            dim: '10" x 8"',
        },
        {
            id: '7',
            name: 'Shiv Shakti',
            category: 'Wall Decor',
            ext: 'jpeg',
            featured: false,
            price: '₹7999',
            description: {
                oneLiner: 'A powerful portrayal of divine union, where Shiva and Shakti come together in a moment of profound connection, symbolizing the harmony of strength, energy, and love.',
                medium: 'Acrylic on Canvas',
                style: 'Contemporary Indian Figurative',
                mood: 'Sacred, Powerful, Serene',
                theme: 'Divine Union, Love, Balance, Strength, Spirituality',
            },
            dim: '18" x 24"',
        },
        {
            id: '8',
            name: 'Phoenix',
            category: 'Wall Decor',
            ext: 'jpeg',
            featured: false,
            price: '₹14,999',
            description: {
                oneLiner: 'A majestic symbol of rebirth and resilience, rising through layers of texture and luminous color with a spirit that refuses to be contained.',
                medium: 'Texture Art on Canvas',
                style: 'Contemporary Textured Art',
                mood: 'Powerful, Uplifting, Mystical',
                theme: 'Rebirth, Resilience, Transformation, Freedom',
            },
            dim: '35.5" x 24.5"',
        },
        {
            id: '9',
            name: 'ECHOES OF HERITAGE',
            category: 'Wall Decor',
            ext: 'jpg',
            featured: false,
            price: '₹8,999',
            description: {
                oneLiner: 'A beautiful glimpse of traditional architecture, vibrant colors, and timeless Indian culture.',
                medium: 'Texture Art on Canvas',
                style: 'Contemporary Indian Figurative',
                mood: 'Warm, Nostalgic, Serene',
                theme: 'Heritage, Tradition, Culture, Timeless Beauty',
            },
            dim: '18" x 24"',
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