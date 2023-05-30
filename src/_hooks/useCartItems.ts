import React from "react";
import {useContent} from "./useContent";
export function useCartItems( ) {
    const [cartItems, setCartItems] = React.useState([])


    return [cartItems]
}