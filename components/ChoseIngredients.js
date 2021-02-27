
import styleIngrediens from "../styles/ChoseIngredients.module.css"
import Image from "next/image"
import {useState,useEffect} from "react"

//ingredients data 
import {data} from "../src/IngredientsData";

//components
import Tag from "../components/Tag"
import IngredientsTemplate from "../components/IngredientsTemplate"

export default function ChoseIngredients() {
    const [ingredients, setSngredients] = useState(data);

    const filterData = (keyWord) => {
        const result = data.filter(ing => {
            const name = ing.alt.toUpperCase();
            const key = keyWord.toUpperCase();
            if( name.includes(key)){
                return true;
            }else {
                return false;
            }
        });

        setSngredients(result);
    }

    return (
        <div className={styleIngrediens.container}>
            <div className={styleIngrediens.header}>
                <div className={styleIngrediens.backBtn}>
                    <svg viewBox="0 0 131.03 221.76">
                        <polygon points="110.88 90.73 20.15 0 0.16 19.99 90.89 110.72 0 201.62 20.15 221.76 111.04 130.87 131.03 110.88 110.88 90.73"/>
                    </svg>
                    <div></div>
                </div>
                <h1>Customize</h1>
                <p className={styleIngrediens.titleSub}>Step 1: Choose ingredients</p>
                <p className={styleIngrediens.discription}>Chose a maximal of 5 ingrediens that you want to include in your pragrance</p>
                <div className={styleIngrediens.chosen}>
                    <p>Chosen:</p>
                    <Tag imgUrl={data[5].url} tagName="Rambutan" onClick={(e) => {console.log(e.target)}}/>
                    <Tag imgUrl={data[9].url} tagName="Rambutan" onClick={(e) => {console.log(e.target)}}/>
                    <Tag imgUrl={data[13].url} tagName="Rambutan" onClick={(e) => {console.log(e.target)}}/>
                </div>
                <div className={styleIngrediens.searchNBtn}>
                    <div className={styleIngrediens.search}>
                        <input onChange={(e)=>{filterData(e.target.value)}} type="text" name="searchInput" placeholder="Search"/>
                        <div className={styleIngrediens.searchIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 10.7">
                                <path  d="M603.79,284.79l-3.33-3.33a4.22,4.22,0,1,0-.8.88l3.29,3.3ZM597,282.12a3,3,0,1,1,3-3A3,3,0,0,1,597,282.12Z" transform="translate(-592.79 -274.94)"/>
                            </svg>
                        </div>
                    </div>
                    <div className={styleIngrediens.continue}>
                        <button>Continue</button>
                    </div>

                </div>
            </div>
            <div className={styleIngrediens.ingredientsWraper}>
                <div className={styleIngrediens.body}>
                    <div className={styleIngrediens.ingrediens}>
                        {
                            data.map(ingredientdata => {
                                return <IngredientsTemplate imgUrl={ingredientdata.url} name={ingredientdata.alt} chosen={ingredientdata.id % 3 === 0 ? true : false} key={ingredientdata.id} 
                                display={ingredients.includes(ingredientdata)}/>
                            })
                        }
                        { ingredients.length === 0 && <div className={styleIngrediens.noFound}> No ingredient found </div> }
                    </div>
                    <div className={styleIngrediens.footer}>
                        <div className={styleIngrediens.logo}>
                            <Image src="/img/logo.png" layout="fill" objectFit="contain" objectPosition="left center"/>
                        </div>
                        <p>Copyright AMOROUS 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
