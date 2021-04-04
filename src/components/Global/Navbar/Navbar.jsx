import React from 'react'
import styles from "./Navbar.module.css"
import {Link} from "react-router-dom"
import Logo from "./../../../images/strumm_logo.png"
import {BsSearch} from "react-icons/bs"

function Navbar({...rest}) {
    
    return (
        <div>
        
        <nav className={styles.navbar} {...rest}>
            <div className={styles.navbrand}>
                <img src={Logo} />
                <Link to="/" className={styles.navLink}>STRUMM</Link>
            </div>
            <div className={styles.searchBar}>
            <input className={styles.searchBarInput}></input>
            <div className={styles.searchIcon}>
            <BsSearch />
            </div>
            </div>
            <ul className={styles.CTA}>
            <li>
            <Link to="/wishlist" className={styles.navLink}>Wishlist</Link>
            </li>
            <li>
            <Link to="/cart" className={styles.navLink}>Cart</Link>
            </li>
            </ul>
        </nav>
        <nav className={styles.secondaryNavbar}>
            <ul className={styles.secondaryNavList}>
                <li>
                <Link to="/" className={styles.navLink}>Home</Link>  
                </li>
                <li>
                <Link to="/" className={styles.navLink}>Categories</Link>  
                </li>
                <li>
                <Link to="/" className={styles.navLink}>Guitars</Link>  
                </li>
                <li>
                <Link to="/" className={styles.navLink}>Drums</Link>  
                </li>
                <li>
                <Link to="/" className={styles.navLink}>Pianos</Link>  
                </li>
                <li>
                <Link to="/" className={styles.navLink}>Studio</Link>  
                </li>
                <li>
                <Link to="/" className={styles.navLink}>Used</Link>  
                </li>
                <li>
                <Link to="/" className={styles.navLink}>Contact Us</Link>  
                </li>
            </ul>
        </nav>
        </div>

    )
}

export default Navbar
