import React from 'react'
import styles from "./ProductsCard.module.css"
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import cx from "classnames"

function ProductsCard({dispatch, item, ...rest}) {
    return (
        <div className={styles.productCard} key={item.id} {...rest}>
           <div className={styles.productImg}>
               <img src={item.image} />
               {!item.wishListed?(
                <button onClick={() => dispatch({type:"ADD_TO_WISHLIST", payload:item})} className={styles.wishList}><AiFillHeart /></button>
               ):
               (<button onClick={() => dispatch({type:"REMOVE_FROM_WISHLIST", payload:item})} className={cx(styles.wishListed, styles.wishList)}><AiFillHeart /></button>)}
               
           </div>
           <div className={styles.productType}><span>{item.category.type}</span></div>
           <div className={styles.productTitle}>
               <span> {`${item.id.substring(0,5)} ${item.name}`} </span>
            </div>
            <div>
               Rs. {item.price}
            </div> 
            <div className={styles.productCTA}>
                <button onClick={() => dispatch({type:"ADD_TO_CART", payload:item})} className={styles.cart}>{!item.inCart?`ADD TO CART`:`GO TO CART`}</button>
                
            </div> 
        </div>
    )
}

export default ProductsCard
