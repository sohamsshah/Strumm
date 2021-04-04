import React from 'react'
import Navbar from "../../../Global/Navbar/Navbar"
import Footer from "../../../Global/Footer/Footer"
import {useCart} from "../../../../context/cart-context"
import {filterByInstrumentName} from "../../../../utils/dataFilter"
import ProductsCard from "../ProductsCard/ProductsCard"

export default function ProductPage({instrument, ...rest}) {
    const {products, dispatch} = useCart();
    const product = filterByInstrumentName(products, instrument);
    return (
        <div>
            <Navbar />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
        {product.map(
          (item) => (
            <ProductsCard products={product} dispatch={dispatch} item={item}/>
          )
        )}
      </div>
      <Footer />
        </div>)
}
