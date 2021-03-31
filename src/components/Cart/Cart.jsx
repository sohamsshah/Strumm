import React from 'react'
import {useCart} from "./../../context/cart-context"
import {totalItems} from "./../../utils/totalQuantity"

function Cart() {
    const {products, dispatch} = useCart();
    const cartItems = totalItems(products);
    return (
        <div>
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
