import sectionTwoStyle from "../styles/SectionThree.module.css";
import Image from "next/image";

export default function SectionTwo() {
    return (
        <div className={sectionTwoStyle.container}>
            <div className={sectionTwoStyle.body}>
                <div className={[sectionTwoStyle.image, "section3_img"].join(" ")}>
                    <Image src="/img/homeSectionThree.jpg" height={3692} width={2786} alt="Design your own" />
                </div>
                <div className={[sectionTwoStyle.content,"section3_content"].join(" ")}>
                    <h1>MAKE THE GOOD BETTER</h1>
                    <p>Design your fragrance with the glowbal brand. Justify to make it better just for you</p>
                    <div>
                    <button >Make global brands your own</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
