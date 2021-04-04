import React from 'react'
import CategoryCard from "./CategoryCard/CategoryCard"
import Footer from "./../../Global/Footer/Footer"
import Navbar from "./../../Global/Navbar/Navbar"
import styles from "./AllCategories.module.css"
import {categories} from "./../../../data/data"

function AllCategories() {
    return (
        <div>
          <Navbar />
          <div className={styles.title}>Categories</div>
          <div className={styles.categoryGroup}>
            {categories.map(({title, href, src}) => <CategoryCard href={href} src={src} title={title}/>)}
          </div>
          <Footer />
        </div>
    )
}

export default AllCategories
