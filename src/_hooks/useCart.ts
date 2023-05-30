import React from "react";
import AppContext from "../_context/contentContext";

export const useCart = () => {
    //вытаскиваем из контекста наличие карточек в корзине
    const { cartItems, setCartItems } = React.useContext(AppContext)
    //вытаскиваем сумму ил массива карточек в корзине
    const totalPrice = cartItems.reduce((sum, obj) => Number(obj.price) + sum, 0)

    return { cartItems, setCartItems, totalPrice }
}