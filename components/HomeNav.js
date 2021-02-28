import homeNavStyle from "../styles/HomeNav.module.css"
import Image from "next/image"
import Link from "next/link"

export default function HomeNav() {
    return (
        <div className={homeNavStyle.container} style={{position:"fixed", zIndex:"99", top:"0", left:"0"}}>
          <div className={homeNavStyle.body}>
            <div className={homeNavStyle.logo}>
            <Link href="/"> 
              <Image src="/img/logo.png" layout="fill" objectFit="contain" objectPosition="left center"/>
            </Link>
            </div>
            <div className={homeNavStyle.links}>
              <div className={homeNavStyle.link}>
                  <h3>Create</h3>
                  <div className={homeNavStyle.dropdown}>
                    <div className={homeNavStyle.dropdownBody}>
                        <Link href="/customize"><h3>Create your own</h3></Link>
                        <h3>Make blobal brands your own</h3>
                        <h3>Let us chose for you</h3>
                    </div>
                  </div>
              </div>
              <div className={homeNavStyle.about , homeNavStyle.link}>
              <h3>About</h3>
              </div>
              <div className={homeNavStyle.contact , homeNavStyle.link}>
              <h3>Contact</h3>
              </div>
            </div>
          </div>
        </div>
    )
}
