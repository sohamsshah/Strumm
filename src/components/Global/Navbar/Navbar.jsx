import React from 'react'
import styles from "./Navbar.module.css"
import {NavLink, Link} from "react-router-dom"
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
                <NavLink to="/" exact={true} className={styles.navLink} activeClassName={styles.active}>Home</NavLink>
                </li>
                <li>
                <NavLink to="/categories" active="selected" className={styles.navLink} activeClassName={styles.active}>Categories</NavLink>  
                </li>
                <li>
                <NavLink to="/categories/guitars" className={styles.navLink} activeClassName={styles.active}>Guitars</NavLink>  
                </li>
                <li>
                <NavLink to="/categories/drums" className={styles.navLink} activeClassName={styles.active}>Drums</NavLink>  
                </li>
                <li>
                <NavLink to="/categories/pianos" className={styles.navLink} activeClassName={styles.active}>Pianos</NavLink>  
                </li>
                <li>
                <NavLink to="/categories/studio" className={styles.navLink} activeClassName={styles.active}>Studio</NavLink>  
                </li>
                <li>
                <NavLink to="/categories/used" className={styles.navLink} activeClassName={styles.active}>Used</NavLink>  
                </li>
                <li>
                <NavLink to="/contact-us" className={styles.navLink} activeClassName={styles.active}>Contact Us</NavLink>  
                </li>
            </ul>
        </nav>
        </div>

    )
}

export default Navbar
