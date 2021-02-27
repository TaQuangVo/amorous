import styleGender from "../styles/ChooseGender.module.css"

//components
import FooterSecondary from "../components/FooterSecondary"
import ImageBtn from "../components/ImageBtn"


export default function ChooseGender() {
    return (
        <div className={styleGender.container}>
            <div className={styleGender.header}>
                <div className={styleGender.backBtn}>
                    <svg viewBox="0 0 131.03 221.76">
                        <polygon points="110.88 90.73 20.15 0 0.16 19.99 90.89 110.72 0 201.62 20.15 221.76 111.04 130.87 131.03 110.88 110.88 90.73"/>
                    </svg>
                    <div></div>
                </div>
                <h1>Customize</h1>
                <div className={styleGender.subNBtn}>
                    <p className={styleGender.titleSub}>Step 1: Choose gender</p>
                    <div className={styleGender.continue}>
                        <button>Continue</button>
                    </div>
                </div>
            </div>
            <div className={styleGender.genderPicker}>
                <div className={styleGender.body}>
                    <div className={styleGender.buttonWraper}>
                        <ImageBtn url="/img/female.jpg" text="Female"/>
                        <ImageBtn url="/img/male.jpg" text="Male"/>
                    </div>
                    <FooterSecondary />
                </div>
            </div>
        </div>
    )
}
