import homeMainStyle from "../styles/HomeMain.module.css";
import Image from "next/image"
import Link from "next/link"





export default function HomeMain() {


    return (
        <div className={homeMainStyle.container} >
            <div className={homeMainStyle.hero}>
                <div className={homeMainStyle.wraperWraper}>
                    <div className={homeMainStyle.heroImageWraper}>
                      <Image width={3146} height={2000} src="/img/homeHeroImage.jpg" alt="Become A Designer" align="center" layout="responsive"/>
                    </div>  
                </div>
                <div className={homeMainStyle.heroContent}>
                    <div className={homeMainStyle.heroHeader}>
                        <h1 className="home-hero-header" >Become a designer</h1> 
                        <h2 className="home-hero-sub" >Design your own fragrance</h2>
                    </div>
                    <div className={homeMainStyle.options}>
                        
                    <div className={homeMainStyle.option}>
                        <div className={homeMainStyle.optionBody}>
                            <div className={homeMainStyle.optionTittle}>
                                <h3>
                                    Design your own
                                </h3>
                            </div>
                            <div className={homeMainStyle.optionContent} >
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                                </p>
                                <div>
                                    <Link href="/customize">
                                        <button >
                                            Let design
                                        </button>
                                    </Link>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div className={homeMainStyle.option}>
                        <div className={homeMainStyle.optionBody}>
                            <div className={homeMainStyle.optionTittle}>
                                <h3>
                                    Design with blobal brands
                                </h3>
                            </div>
                            <div className={homeMainStyle.optionContent} >
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                                </p>
                                <div>
                                    <button >
                                        Let design
                                    </button>
                                </div>
                            
                            </div>
                        </div>
                        
                    </div>
                    <div className={homeMainStyle.option}>
                        <div className={homeMainStyle.optionBody}>
                            <div className={homeMainStyle.optionTittle}>
                                <h3>
                                    Let us chose for you
                                </h3>
                            </div>
                            <div className={homeMainStyle.optionContent} >
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                                </p>
                                <div>
                                    <button >
                                        Let design
                                    </button>
                                </div>
                            
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

                </div>               
            </div>
            
        </div>
    )
}
