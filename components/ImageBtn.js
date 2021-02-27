import Image from "next/image"
import styleBtn from "../styles/ImageBtn.module.css"

export default function ImageBtn({url, text}) {
    return (
        <div className={styleBtn.container}>
            <div className={styleBtn.background}>
                <Image src={url} width={450} height={300} alt="Female" />
            </div>
            <div className={styleBtn.body}>
                <div className={styleBtn.border}>
                    <h2>{text}</h2>
                </div>
            </div>
        </div>
    )
}
