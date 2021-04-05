import React from 'react'
import styles from "./CategoryCard.module.css"

function CategoryCard({title,src, href,...rest}) {
    console.log(src);
    return (
        <div className={styles.card} {...rest}>
            <a href={href}><img src={src} alt="card" /></a>
        <div>
            <a className={styles.link} href={href}>{title}</a>
        </div>
        </div>
    )
}

export default CategoryCard
