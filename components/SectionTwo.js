import sectionTwoStyle from "../styles/SectionTwo.module.css";
import Image from "next/image";

export default function SectionTwo() {
    return (
        <div className={sectionTwoStyle.container}>
            <div className={sectionTwoStyle.body}>
                <div className={[sectionTwoStyle.image,"section2_img"].join(" ")}>
                    <Image src="/img/homeSection2Image.jpg" height={5472} width={3648} alt="Design your own" layout="responsive" sizes="30vw"/>
                </div>
                <div className={[sectionTwoStyle.content, "section2_content"].join(" ")} >
                    <h1>YOUR IMAGINATION</h1>
                    <p>Will determin your apearance and the way you smell. we bour own by design your own smell</p>
                    <div>
                    <button >Desgin your own</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
