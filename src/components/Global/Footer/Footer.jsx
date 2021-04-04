import React from 'react'
import styles from "./Footer.module.css"
import Logo from "./../../../images/strumm_logo.png"

function Footer() {
    return (
        <div className={styles.footerWrapper}>
        <div className={styles.footer}>
            <div className={styles.footerBrand}>
               <img src={Logo} />
               <p>STRUMM</p>
            </div>
            <div className={styles.footerDetails}>
                <b>Information</b>
                <ul>
                    <li><a href="">About us</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Warranty</a></li>
                    <li><a href="">Find my product</a></li>
                    <li><a href="">Reward Points</a></li>
                </ul>
            </div>
            
            <div className={styles.footerDetails}>
                <b>Our Company</b>
                <ul>
                    <li><a href="">Photo Gallery</a></li>
                    <li><a href="">Press Release</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>

            <div className={styles.footerDetails}>
                <b>Customer Service</b>
                <ul>
                    <li><a href="">Contact</a></li>
                    <li><a href="">FAQs</a></li>
                    <li><a href="">Shipping Policy</a></li>
                    <li><a href="">Refund Policy</a></li>
                    <li><a href="">Cancellation Policy</a></li>
                    <li><a href="">Track your order</a></li>
                </ul>
            </div>

        </div>
        <div className={styles.copyrightText}> 
            <div>Copyright 2021. All Rights Reserved.</div>
            <div>Powered by <b>The Sodium Universe</b></div>
        </div>
        </div>
    )
}

export default Footer
