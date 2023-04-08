import React from 'react'
import zurag from "../../assets/image/14.jpeg"
import styles from './style.module.css'
// arrow function
// engiin function gaas arai baga bichigleltei gj uzne gehdee
// uildel ni zarim neg zuileese hyzgaarlagdmal 


const ArrowFunction = (props) => {
    // block code
    return(
        <>
            <div className={styles.box}>
                <div>
                    <img src={props.image} />
                </div>
                <div>
                    ene bol ooorchlolt ene deer block code bnaa
                    fdsafdsfdsfdsajfhdskdskjkjjfds
                    <h1>fdsafdsafdsfdsaf</h1>
                    <h1>{props.tittle}</h1>
                    <h1>{props.des}</h1>
                    <p>{props.date}</p>
                </div>
                {/* <img className={styles.image} src={props.image}/>
                <h1 className={styles.garchig}>{props.tittle}</h1>
                <p className={styles.text}>{props.date}</p> */}
            </div>
        </>
    )
}
export default ArrowFunction