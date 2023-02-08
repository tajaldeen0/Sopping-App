import React, { useState, useContext, createContext } from 'react'
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const getTotal = () => {
        return cart.reduce((prev, current) => prev + (current.price * current.quantity), 0)
    }

    const emptyCart = () => {
        setCart([]);
    }

    const addToCart = (product, quantity) => {
        // check if the product alredy exist add the new quantity to the prev quantity
        if (cart.filter(el => el.id === product.id).length > 0) {
            setCart(prev => prev.map(el => {
                if (el.id === product.id) {
                    return { ...el, quantity: quantity }
                }
                return el;
            }));
        } else {
            setCart(prev => [...prev, { ...product, quantity }])
        }
    }

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(el => el.id !== id));
    }

    const increaseProductQuantity = (id) => {
        setCart(prev => prev.map(el => {
            if (el.id === id) {
                return { ...el, quantity: el.quantity + 1 }
            }
            return el;
        }));
    }

    const decreaseProductQuantity = (id) => {
        setCart(prev => prev.map(el => {
            if (el.id === id) {
                if (el.quantity > 0) {
                    return { ...el, quantity: el.quantity - 1 }
                }
            }

            return el;
        }));
    }


    return (
        <CartContext.Provider
            value={{
                getTotal,
                addToCart,
                removeFromCart,
                increaseProductQuantity,
                decreaseProductQuantity,
                emptyCart,
                cart
            }}>
            {children}
        </CartContext.Provider>
    )
}

