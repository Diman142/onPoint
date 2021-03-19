import React, {useState} from "react";
import Nav from "../../containers/Nav/Nav";
import classes from "./Promo.module.css";
import Loader from "../../components/Loader";
import { Redirect } from 'react-router-dom'

const styles = [
  [
    {
      width: "105px",
      position: "absolute",
      top: "30%",
      left: "52%",
    },
    {
      width: "270px",
      position: "absolute",
      top: "35%",
      left: '110%',
      fontSize: "32px",
      color: "#0d319c",
    },
    {
      width: '105px',
      height: '105px'
    },
    'Цель по HbA1c',
  ],
  [
    {
      width: "57px",
      position: "absolute",
      top: "53%",
      left: "25%",
    },
    {
      width: "270px",
      position: "absolute",
      top: "-50%",
      left: "-160%",
      fontSize: "32px",
      color: "#0d319c",
    },
    {
      width: '60px',
      height: '60px'
    },
    'Гипоглекимия',
  ],
  [
    {
      width: "57px",
      position: "absolute",
      top: "68%",
      left: "44%",
    },
    {
      width: "270px",
      position: "absolute",
      top: "-90%",
      left: "-290%",
      fontSize: "32px",
      color: "#0d319c",
    },
    {
      width: '35px',
      height: '35px'
    },
    'Осложнения СД',
  ],
  [
    {
      width: "57px",
      position: "absolute",
      top: "66%",
      left: "78%",
    },
    {
      width: "270px",
      position: "absolute",
      top: "-90%",
      left: "-200%",
      fontSize: "32px",
      color: "#0d319c",
    },
    {
      width: '35px',
      height: '35px'
    },
    'СС риски',
  ]
]

let startY = 0
let endY = 0

const Promo = () => {

  const [toSecondPage, setToSecondPage] = useState(false)

  return (

    <>
    {toSecondPage ? <Redirect to="/hero" />
    :
    <section className={classes.Promo} onTouchStart={(event) => {

      startY = event.targetTouches[0].clientY
    }}
    onTouchMove={(event) => {
      endY = event.targetTouches[0].clientY
    }}
    onTouchEnd={() => {
      if(endY - startY < -90){
        setToSecondPage(true)
      }
    }}>

      <div className="container">
        <Nav />

        {styles.map((item, index) => {
          return <Loader config={item} key={index}/>
        })}

        <div className={classes.PromoWrapper}>
          <h1 className={classes.PromoTitle}>Всегда ли цели терапии СД2 на поверхности?</h1>
        </div>

      </div>

      <a className={classes.PromoLink} href="/#">Листайте вниз</a>
    </section>
    }
    </>
  );
};

export default Promo;
