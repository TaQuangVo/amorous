import React from 'react'
import styleFooter from "../styles/FooterSecondary.module.css"
import Image from "next/image"

export default function FooterSecondary() {
    return (
        <div className={styleFooter.footer}>
            <div className={styleFooter.logo}>
                <Image src="/img/logo.png" layout="fill" objectFit="contain" objectPosition="left center"/>
            </div>
            <p>Copyright AMOROUS 2021</p>
        </div>
    )
}
