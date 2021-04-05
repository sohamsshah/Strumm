import React from 'react'
import Navbar from "./../Global/Navbar/Navbar"
import {Link} from "react-router-dom";
import styles from "./Home.module.css";
import Footer from "./../Global/Footer/Footer"
import themes from "./../Global/Themes/Themes.css"
import CategoryCard from "./../Categories/AllCategories/CategoryCard/CategoryCard";
import {categories} from "./../../data/data"
import Banner from "./../../images/EMI_banner.png"
function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.hero}>
            <Navbar />
            <div className={styles.heroContent}>
               <p className={styles.heroHeading}>MUSIC for everyone!</p>
               <p className={styles.heroLead}>Buy Eminent Musical Instruments at the best deals for your inner rockstar. At Strumm, we have a wide range of Pianos, Guitars, Vocal Set, Drumkits and pretty much everything for your passion for Music.</p>
               <button className={styles.heroButton}><Link to="/categories">START SHOPPING</Link></button>
            </div>
            
            </div>
            <div className={styles.categories}>
                <h1 className={themes.h1}>Browse by Categories</h1>
                <hr />
                <div className={styles.categoryCards}>
                {categories.slice(0,3).map(({src, href, title}) => <CategoryCard src={src} href={href} title={title} />)}
                </div>
            </div>
            <div className={styles.banner}>
            <img src={Banner} alt="banner" />
            </div>
            <Footer />

        </div>
    )
}

export default Home
