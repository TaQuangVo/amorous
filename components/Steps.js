import stepsStyle from '../styles/Steps.module.css'
import {useEffect, useState, useRef} from "react"
import dynamic from "next/dynamic"

//gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);





export default function Steps({step}) {

    const [currentStep, setcurrentStep] = useState(step ? step : 0);
    const [currentPos, setCurrentPos] = useState(0);
    var stepContainer = useRef(null);
    var stepBody = useRef(null);
    const totalSteps = 6;



    //set completed steps
    useEffect(() => {
        const stepsDiv = document.querySelectorAll(".stepDiv");
        const stepsArrows = document.querySelectorAll(".customize__Arrow");

        stepsDiv.forEach((div, index)=> {
            if(index < step){
                div.style.opacity="1";
                if(index > 0 && index < 5){
                    stepsArrows[index-1].style.opacity="1";
                }             
            }
        })
    }, [])

    //set initial step position;
    useEffect(() => {
        setStepInitPos();
    }, [])

    const setStepInitPos = () => {
        const containerW = stepContainer.offsetWidth;
        const bodyW = stepBody.offsetWidth;

        const stepLength = bodyW / totalSteps;
        const Showedsteps = containerW / stepLength;

        if(currentStep >= Showedsteps){
            if(currentStep < totalSteps){
                const offset = -(currentStep - Showedsteps) * stepLength;
                stepBody.style.transform = `translate(${offset}px, 0px)`;
                setCurrentPos(offset);
            }else{
                const offset =  containerW - bodyW;
                stepBody.style.transform = `translate(${offset}px, 0px)`;
                setCurrentPos(offset);
            }
        }
    }

    const handleArrowClick = (dir) => {
        const containerW = stepContainer.offsetWidth;
        const bodyW = stepBody.offsetWidth;
        const stepLength = bodyW / totalSteps;

        const maxOffset = bodyW - containerW;

        if(dir === "right"){
            if(-currentPos <= maxOffset){
                const stepsHided = (maxOffset + currentPos) / stepLength;
                if(stepsHided > 1){
                    const offset = currentPos - stepLength;
                    stepBody.style.transform = `translate(${offset}px, 0px)`;
                    setCurrentPos(offset);
                }else if (stepsHided <= 1 && stepsHided > 0){
                    const offset =  containerW - bodyW;
                    stepBody.style.transform = `translate(${offset}px, 0px)`;
                    setCurrentPos(offset);
                }else if (stepsHided === 0){
                    stepBody.style.transform = `translate(0px, 0px)`;
                    setCurrentPos(0);
                }
            }else{
                const offset =  containerW - bodyW;
                stepBody.style.transform = `translate(${offset}px, 0px)`;
                setCurrentPos(offset);
                
            }
        }
        if(dir === "left"){
            if(currentPos <= 0){
                const stepsHided = -currentPos / stepLength;
                
                if(stepsHided > 1){
                    //console.log(">1")
                    const offset = currentPos + stepLength;
                    stepBody.style.transform = `translate(${offset}px, 0px)`;
                    setCurrentPos(offset);
                }else if (stepsHided <= 1 && stepsHided > 0){
                    //console.log("else")
                    const offset =  0;
                    stepBody.style.transform = `translate(${offset}px, 0px)`;
                    setCurrentPos(offset);
                }else if (stepsHided === 0){
                    const offset =  containerW - bodyW;
                    stepBody.style.transform = `translate(${offset}px, 0px)`;
                    setCurrentPos(offset);
                }
            }
        }

    }

    return (
        <div className={stepsStyle.stepperWraper}>
        <div className={stepsStyle.stepper}>
        <div className={stepsStyle.leftArrow}>
            <div onClick={() => {handleArrowClick("left")}}>
                <svg viewBox="0 0 131.03 221.76">
                    <polygon points="110.88 90.73 20.15 0 0.16 19.99 90.89 110.72 0 201.62 20.15 221.76 111.04 130.87 131.03 110.88 110.88 90.73"/>
                </svg>
            </div>
            </div>
        <div ref={el => stepContainer = el} className={stepsStyle.container} data-scroll-container>
            <div ref={el => stepBody = el} className={stepsStyle.body} >
                <div className={[stepsStyle.step,"stepDiv"].join(" ")}>
                    <h3>Step 1</h3>
                    <p>Chose gender</p>
                </div>
                <svg viewBox="0 0 131.03 221.76" className="customize__Arrow">
                    <polygon points="110.88 90.73 20.15 0 0.16 19.99 90.89 110.72 0 201.62 20.15 221.76 111.04 130.87 131.03 110.88 110.88 90.73"/>
                </svg>
                <div className={[stepsStyle.step,"stepDiv"].join(" ")}>
                    <h3>Step 2</h3>
                    <p>Chose a smell</p>
                </div>
                <svg viewBox="0 0 131.03 221.76"  className="customize__Arrow">
                    <polygon points="110.88 90.73 20.15 0 0.16 19.99 90.89 110.72 0 201.62 20.15 221.76 111.04 130.87 131.03 110.88 110.88 90.73"/>
                </svg>
                <div className={[stepsStyle.step,"stepDiv"].join(" ")}>
                    <h3>Step 3</h3>
                    <p>Chose a mode</p>
                </div>
                <svg viewBox="0 0 131.03 221.76"  className="customize__Arrow">
                    <polygon points="110.88 90.73 20.15 0 0.16 19.99 90.89 110.72 0 201.62 20.15 221.76 111.04 130.87 131.03 110.88 110.88 90.73"/>
                </svg>
                <div className={[stepsStyle.step,"stepDiv"].join(" ")}>
                    <h3>Step 4</h3>
                    <p>Chose ingrediens</p>
                </div>
                <svg viewBox="0 0 131.03 221.76"  className="customize__Arrow">
                    <polygon points="110.88 90.73 20.15 0 0.16 19.99 90.89 110.72 0 201.62 20.15 221.76 111.04 130.87 131.03 110.88 110.88 90.73"/>
                </svg>
                <div className={[stepsStyle.step,"stepDiv"].join(" ")}>
                    <h3>Step 5</h3>
                    <p>Chose bottle</p>
                </div>
                <svg viewBox="0 0 131.03 221.76"  className="customize__Arrow">
                    <polygon points="110.88 90.73 20.15 0 0.16 19.99 90.89 110.72 0 201.62 20.15 221.76 111.04 130.87 131.03 110.88 110.88 90.73"/>
                </svg>
                <div className={[stepsStyle.step,"stepDiv"].join(" ")}>
                    <h3>Step 6</h3>
                    <p>Chose box</p>
                </div>
            </div>
        </div>
            
            <div onClick={() => {handleArrowClick("right")}} className={stepsStyle.rightArrow}>
                <div>
                    <svg viewBox="0 0 131.03 221.76">
                        <polygon points="110.88 90.73 20.15 0 0.16 19.99 90.89 110.72 0 201.62 20.15 221.76 111.04 130.87 131.03 110.88 110.88 90.73"/>
                    </svg>             
                </div>
            </div>
        </div>
        </div>
    )
}
