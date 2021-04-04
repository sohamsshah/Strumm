import React from 'react'
import {useCart} from "./../../context/cart-context"

export default function WishList() {
    const {products, dispatch} = useCart();
    let wishListedItems = products.filter((item) => item.wishListed)

    return (
        <div>
            Hello I am WishList
            {wishListedItems.map((item) => <div>
                {item.name}
                <button onClick={() => dispatch({type:"REMOVE_FROM_CART", payload:item})}>REMOVE</button>
                </div>)}
        </div>
    )
}
