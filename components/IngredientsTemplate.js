import styleIngredients from "../styles/IngredientsTemplete.module.css"
import Image from "next/image";

export default function IngredientsTemplate({imgUrl, name, chosen, display}) {
    return (
        <div className={styleIngredients.container} style={display ? {display:"block"} : {display:"none"}}>
            <div className={styleIngredients.avata}>
                <div className={styleIngredients.avataOutline}></div>
                <div className={styleIngredients.avataImage}>
                    <Image src={imgUrl} layout="fill" objectFit="contain" objectPosition="center center" alt={name}/>
                </div>
                <div className={styleIngredients.chosen} style={chosen? null : {display:"none"}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.78 28.45">
                    <path d="M941.56,525.78c.2,0,1-.11,1.05-.3l4.31-9.11a.56.56,0,1,0-1-.53L941.06,525a.56.56,0,0,0,.23.76A.54.54,0,0,0,941.56,525.78Z" transform="translate(-932.97 -515.55)"/>
                    <path d="M956.17,525.78a.48.48,0,0,0,.26-.07.56.56,0,0,0,.23-.76l-4.87-9.11a.56.56,0,0,0-1,.53l4.31,9.11C955.21,525.67,956,525.78,956.17,525.78Z" transform="translate(-932.97 -515.55)"/>
                    <path d="M964.19,524.66H933.54c-.31,0-.57.44-.57,1s.26,1,.57,1h.87l3.92,16.18a1.26,1.26,0,0,0,1.25,1.17h18.57a1.25,1.25,0,0,0,1.24-1.17l3.93-16.18h.87c.31,0,.56-.44.56-1S964.5,524.66,964.19,524.66ZM938.54,527h1.74l.64,6.65h-1.6Zm1.62,13.9-.64-5.49h1.58l.53,5.49Zm3.11-13.9H945l.29,6.65h-1.62Zm.87,13.9-.34-5.49h1.58l.23,5.49Zm5.46,0h-1.47l-.06-5.49h1.58Zm.07-7.25h-1.61L948,527h1.75Zm3.91,7.25h-1.47l.24-5.49h1.58Zm.46-7.25h-1.61l.28-6.65h1.75Zm3.53,7.25H956.1l.53-5.49h1.58Zm.84-7.25H956.8l.64-6.65h1.74Z" transform="translate(-932.97 -515.55)"/>
                </svg>
                </div>
            </div>
            <h3>
                {name}
            </h3>
        </div>
    )
}
