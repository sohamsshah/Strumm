import React from 'react'
import {useCart} from "./../../context/cart-context"
import {totalItems} from "./../../utils/totalQuantity"

export function Cart() {
    const {products, dispatch} = useCart();
    const cartItems = totalItems(products);
    return (
        <div>
            Hello I am cart
            {cartItems.map((item) => <div>
                {item.name}
                <button onClick={() => dispatch({type:"INCREMENT", payload:item})}>+</button>
                {item.quantity}
                <button onClick={() => dispatch({type:"DECREMENT", payload:item})}>-</button>
                </div>)}
        </div>
    )
}

export default Cart
