import React from 'react'
import {useCart} from "./../../context/cart-context"
function Categories() {
    const {products, dispatch} = useCart();
    return (
        <div>
            <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(
          (item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #4B5563",
                borderRadius: "0 0 0.5rem 0.5rem",
                margin: "1rem",
                maxWidth: "40%",
                padding: "0 0 1rem"
              }}
            >
              <img src={item.image} width="100%" height="auto" alt={item.productName} />
              <h3> {item.category.instrument} </h3>
              <h3> {item.category.type} </h3>
              <div>Rs. {item.price}</div>
              {item.inStock && <div> In Stock </div>}
              {!item.inStock && <div> Out of Stock </div>}
              {item.fastDelivery ? (
                <div> Fast Delivery </div>
              ) : (
                <div> 3 days minimum </div>
              )}
              <button onClick={() => dispatch({type:"INCREMENT", payload:item})}>ADD TO CART</button>
              <button onClick={() => dispatch({type:"ADD_TO_WISHLIST", payload:item})}>Add to WishList</button>
            </div>
          )
        )}
      </div>
        </div>
    )
}

export default Categories
