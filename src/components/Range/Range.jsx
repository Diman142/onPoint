import React, {useState, useEffect} from 'react'
import classes from './Range.module.css'

let fill = null


const Range = ({config, tab1, tab2, tab3}) => {


  useEffect(() => {
    fill = document.getElementById('fillBar')
  }, [])


  const [value, setValue] = useState(0)

  return (
    <div className={classes.RangeContainer}>
      <span className={classes.RangeBar}><span className={classes.RangeBarFill} id="fillBar"></span></span>
      <input type="range" min="1" max="100" value="0" className={classes.Range} id="userRange" value={value} onChange={(event) => {
        setValue(event.target.value)
        fill.style.width = `${event.target.value}%`
        if(value < 30){
          tab1.current.style.transform = 'translateX(0)'
          tab2.current.style.transform = 'translateX(0)'
          tab3.current.style.transform = 'translateX(0)'
        } else if (value > 30 && value < 60){
          tab1.current.style.transform = 'translateX(-100%)'
          tab2.current.style.transform = 'translateX(-100%)'
          tab3.current.style.transform = 'translateX(-100%)'
        } else {
          tab1.current.style.transform = 'translateX(-200%)'
          tab2.current.style.transform = 'translateX(-200%)'
          tab3.current.style.transform = 'translateX(-200%)'
        }

      }}></input>
      <div className="textwrap">
        <span></span>
      </div>
    </div>
  )
}

export default Range
