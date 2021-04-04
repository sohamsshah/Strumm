import React from 'react'
import {Link} from "react-router-dom"
import Navbar from "./../../../Global/Navbar/Navbar"
import {useCart} from "./../../../../context/cart-context"
import {filterByInstrumentName} from "./../../../../utils/dataFilter"
import ProductsCard from "./../ProductsCard/ProductsCard"

export default function Guitar() {
    const {products, dispatch} = useCart();
    const guitars = filterByInstrumentName(products, "Guitar");
    return (
        <div>
            <Navbar />
            <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
        {guitars.map(
          (item) => (
            <ProductsCard products={guitars} dispatch={dispatch} item={item}/>
            // // <div
            // //   key={item.id}
            // //   style={{
            // //     border: "1px solid #4B5563",
            // //     borderRadius: "0 0 0.5rem 0.5rem",
            // //     margin: "1rem",
            // //     maxWidth: "40%",
            // //     padding: "0 0 1rem"
            // //   }}
            // // >
            // /* <img src={item.image} width="100%" height="auto" alt={item.productName} />
            //   <h3> {item.category.instrument} </h3>
            //   <h3> {item.category.type} </h3>
            //   <div>Rs. {item.price}</div>
            //   {item.inStock && <div> In Stock </div>}
            //   {!item.inStock && <div> Out of Stock </div>}
            //   {item.fastDelivery ? (
            //     <div> Fast Delivery </div>
            //   ) : (
            //     <div> 3 days minimum </div>
            //   )}
            //   {item.inCart?(<button><Link to="/cart">Go to Cart</Link></button>):(<button onClick={() => dispatch({type:"ADD_TO_CART", payload:item})}>ADD TO CART</button>)}
            //   <button onClick={() => dispatch({type:"ADD_TO_WISHLIST", payload:item})}>Add to WishList</button> */
            // // </div>
            

          )
        )}
      </div>
        </div>)
}
