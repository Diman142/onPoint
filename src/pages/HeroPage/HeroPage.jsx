import React, {useState} from 'react'
import classes from './HeroPage.module.css'
import { Redirect } from 'react-router-dom'
import Nav from "../../containers/Nav/Nav";

const HeroPage = () => {

  const [toPrevPage, settoPrevPage] = useState(false)
  const [toNextPage, settoNextPage] = useState(false)

  let startY = 0
  let endY = 0


  return (
    <>
    {toPrevPage ?  <Redirect to="/" /> : null}
    {toNextPage ?  <Redirect to="/main" /> : null}
    <section className={classes.Hero} onTouchStart={(event) => {
      startY = event.targetTouches[0].clientY
    }} onTouchMove={(event) => {
      endY = event.targetTouches[0].clientY
    }} onTouchEnd={() => {
      if(endY - startY < -90){
        settoNextPage(true)
      } else if(endY - startY > 90){
        settoPrevPage(true)
      }
    }}>
      <div className="container">
      <Nav activePage={2}/>
        <h1 className={classes.HeroTitle }>Основа Терапии - Патогенез СД-2</h1>
      </div>
    </section>
    </>
  )
}

export default HeroPage
