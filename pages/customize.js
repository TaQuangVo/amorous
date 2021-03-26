import customizeStyle from "../styles/Customize.module.css";
import Image from "next/image";
import Link from "next/link";




//components
import Steps from "../components/Steps"
import ChoseIngredients from "../components/ChoseIngredients"
import ChooseGender from "../components/ChooseGender";

export default function customize() {


    return (
        <div className={customizeStyle.container}>
            <div className={customizeStyle.leftSide}>
                <div className={customizeStyle.header}>
                    <div className={customizeStyle.logo}>
                        <Link href="/">
                            <a><Image src="/img/logo.png" layout="fill" objectFit="contain" objectPosition="left center"/></a>
                        </Link>
                    </div>
                    <div className={customizeStyle.background}>
                        <Image src="/img/customizeBackground.jpg" width={1250} height={1250} alt="customize your fragrance" />
                    </div>
                    <div className={customizeStyle.steps} >
                        <Steps step={1}/>
                    </div>
                </div>
            </div>
            <div className={customizeStyle.rightSide}>
                {/*<ChooseGender />*/}
                <ChoseIngredients />
            </div>
        </div>
    )
}
