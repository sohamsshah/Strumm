import React from 'react'
import Navbar from "../../../Global/Navbar/Navbar"
import Footer from "../../../Global/Footer/Footer"
import {useCart} from "../../../../context/cart-context"
import {filterByInstrumentName, sortByFunction, filterByInstrumentType} from "../../../../utils/dataFilter"
import ProductsCard from "../ProductsCard/ProductsCard"
import styles from "./ProductPage.module.css"
import {useReducer} from "react"
import {instrumentType} from "./../../../../data/data"; 

const filterReducer = (state, action) => {
  switch(action.type){
    case "TOGGLE_INVENTORY":
      return (state = {
        ...state,
        showInventoryAll: !state.showInventoryAll
      });
    case "TOGGLE_DELIVERY":
      return (state = {
        ...state,
        showInventoryAll: !state.showInventoryAll
      });
    case "SORT":
      return {
        ...state,
        sortBy: action.payload
      };
    case "TOGGLE_INSTRUMENT":
      return {
        ...state, instrumentFilterState:{...state.instrumentFilterState, [action.payload]:!state.instrumentFilterState[action.payload]}
      }
    default:
      return state;
  }
}

export default function ProductPage({instrument, ...rest}) {
    const {products, dispatch} = useCart();
    const product = filterByInstrumentName(products, instrument);

    const [{showAllProducts, showFastDeliveryOnly, sortBy, instrumentFilterState}, filterDispatch] = useReducer(filterReducer, {
      showInventoryAll: true,
      showFastDeliveryOnly: false,
      sortBy: null,
      instrumentFilterState: instrumentType[instrument].reduce(function(result, item) {
        result[item] = false;
        return result;
      }, {})
    });
    
    const sortedProduct = sortByFunction(product, sortBy);
    const filteredData = filterByInstrumentType(sortedProduct, instrumentFilterState)
    return (
        <div>
            <Navbar />
            <div className={styles.pageLayout}>
            <div className={styles.productFilters}>
            <div>
            <fieldset>
        <legend>Sort By</legend>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() =>
              filterDispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
            }
            checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
          ></input>{" "}
          Price - High to Low
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() =>
              filterDispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
            }
            checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
          ></input>{" "}
          Price - Low to High
        </label>
      </fieldset> 
      <fieldset style={{ marginTop: "1rem" }}>
        <legend> Filters </legend>
        {instrumentType[instrument].map((item) => {
        return (<label>
          <input
            type="checkbox"
            checked={instrumentFilterState[item]}
            onChange={() => filterDispatch({ type: "TOGGLE_INSTRUMENT", payload:item })}
          />
          {item}
        </label>)})}
        </fieldset>          
            </div>
            </div>
            <div className={styles.allProducts}>
            {filteredData.map(
              (item) => (
                <ProductsCard products={product} dispatch={dispatch} item={item}/>
              )
            )}
            </div>
      </div>
      <Footer />
        </div>)
}
