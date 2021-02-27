import homeNavStyle from "../styles/HomeNavMobile.module.css"
import Image from "next/image"

export default function HomeNav() {
    return (
        <div className={homeNavStyle.container} style={{position:"fixed", zIndex:"99", top:"0", left:"0"}}>
          <div className={homeNavStyle.body}>
            <div className={homeNavStyle.logo}>
              <Image src="/img/logo.png" layout="fill" objectFit="contain" objectPosition="left center"/>
            </div>
                <div className={homeNavStyle.hambugerIcon}>
                    <svg viewBox="0 0 156.81 124.56" >
                        <rect width="156.81" height="23.16" rx="11.58"/><rect y="50.7" width="156.81" height="23.16" rx="11.58"/><rect y="101.41" width="156.81" height="23.16" rx="11.58"/>
                    </svg>
                    <div className={homeNavStyle.dropdownWraper}>
                        <div className={homeNavStyle.dropdown}>
                            <p>Design Your Own</p>
                            <p>Design global brands</p>
                            <p>Let us chose for you</p>
                            <p>About</p>
                            <p>contact</p>
                        </div>
                    </div>
                </div>

          </div>
        </div>
    )
}
