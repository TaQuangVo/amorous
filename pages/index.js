import Head from 'next/head'
import {useEffect,useState} from "react"



//conponents
import HomeNav from "../components/HomeNav"
import HomeMain from "../components/HomeMain"
import HomeNavMobile from "../components/HomeNavMobile"
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour"

//gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




export default function Home() {




  useEffect(() => {
    
    
    //herosection animation;
    const heroTimeline = gsap.timeline();
    heroTimeline.from(".home-hero-header",
    {
      opacity:0,
      duration:2,
    }).from(".home-hero-sub",{
      opacity:0,
      y:50,
      duration:2
    },0)

    //section2 animation
    const sectionTwoTl = gsap.timeline();
    sectionTwoTl.from(".section2_content",{
      x:100,
      opacity:0,
      duration:1,
    }).from(".section2_img", {
      scale:1.2,
      opacity:0,
      duration:1.5,
    }, 0)
    ScrollTrigger.create({
      trigger:".section2_content",
      animation:sectionTwoTl,
      start:"top 90%",
    })

    //section3 animation
    const sectionThreeTl = gsap.timeline();
    sectionThreeTl.from(".section3_content",{
      x:-100,
      opacity:0,
      duration:1,
    }).from(".section3_img", {
      scale:1.2,
      opacity:0,
      duration:1.5,
    }, 0)
    ScrollTrigger.create({
      trigger:".section3_content",
      animation:sectionThreeTl,
      start:"top 90%",
    })

    //section4 animation
    const sectionFourTl = gsap.timeline();
    sectionFourTl.from(".homeSection_background",{
      scale:1.3,
      duration:2,
    })
    ScrollTrigger.create({
      animation:sectionFourTl,
      trigger:".homeSection_background",
      start:"top bottom",
    })





    return () => {
      
    }
  }, [])

  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const onResize = () => {
      const width = window.innerWidth;
      if(width < 800){
        document.documentElement.style.setProperty("--nav-hight", "80px")
        setIsMobile(true);
      }else{
        document.documentElement.style.setProperty("--nav-hight", "100px")
        setIsMobile(false);
      }
    }
    onResize();
    window.addEventListener("resize", onResize)

    return ()=> {
      window.removeEventListener("resize", onResize)
    }
  },[]);

  return (
    <div data-scroll-container>
      <Head>
        <title>Amorous</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <nav  >
        {
          isMobile? <HomeNavMobile /> : <HomeNav />
        }
      </nav>

      <main style={{marginTop:"var(--nav-hight)", overflowX:"hidden"}}>
        <HomeMain />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </main>

      <footer >
       
      </footer>
    </div>
  )
}
