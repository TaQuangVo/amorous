import sectionFourStyle from "../styles/HomeSectionFour.module.css"
import Image from "next/image"

import React from 'react'

export default function SectionFour() {
    return (
        <>
        <div className={sectionFourStyle.title}>
            <h2>Don't know what to chose?</h2>
            <p>Are you amazed of the options that we give you <br/>Let us help!</p>
        </div>
        <div className={sectionFourStyle.container}>
            <div className={[sectionFourStyle.background,"homeSection_background"].join(" ")}>
                <Image src="/img/homeSectionfour.jpg" width={7360} height={3535} alt="Let us chose for you" />
            </div>
            <div className={sectionFourStyle.content}>
                <div className={sectionFourStyle.contentBody}>
                    <h2>Let us chose for you</h2>
                    <p>We will create the perfect fragrance just for you</p>
                    <button>
                        LET US CHOSE
                        <svg viewBox="0 0 131.03 221.76">
                            <polygon points="110.88 90.73 20.15 0 0.16 19.99 90.89 110.72 0 201.62 20.15 221.76 111.04 130.87 131.03 110.88 110.88 90.73"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}
