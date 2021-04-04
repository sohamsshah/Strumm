import React from 'react'
import {useCart} from "./../../../context/cart-context"
import {Link} from "react-router-dom";
import Navbar from "./../../Global/Navbar/Navbar"
import styles from "./AllCategories.module.css"

function AllCategories() {
    const {products, dispatch} = useCart();
    return (
        <div>
            
            <Navbar style={{backgroundColor:"var(--dark-color"}}/>
            <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(
          (item) => (<div>{item.id}</div>)
        )}
      </div>
        </div>
    )
}

export default AllCategories
