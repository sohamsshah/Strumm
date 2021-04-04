import React from 'react'
import Navbar from "../../../Global/Navbar/Navbar"
import Footer from "../../../Global/Footer/Footer"
import {useCart} from "../../../../context/cart-context"
import {filterByInstrumentName} from "../../../../utils/dataFilter"
import ProductsCard from "../ProductsCard/ProductsCard"
import styles from "./ProductPage.module.css"

export default function ProductPage({instrument, ...rest}) {
    const {products, dispatch} = useCart();
    const product = filterByInstrumentName(products, instrument);
    return (
        <div>
            <Navbar />
            <div className={styles.pageLayout}>
            <div className={styles.productFilters}>
            Hi
            </div>
            <div className={styles.allProducts}>
            {product.map(
              (item) => (
                <ProductsCard products={product} dispatch={dispatch} item={item}/>
              )
            )}
            </div>
      </div>
      <Footer />
        </div>)
}
