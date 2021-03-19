import React from 'react'
import classes from './Label.module.css'

const Label = ({config}) => {

  return (
    <div className={classes.Label} style={{backgroundImage: `url(${config[2]})`, ...config[0]}}>
      <span className={classes.LabelNumber} style={config[3].style}>{config[3].number}</span>
      <span className={classes.LabelText} style={config[4].style}>{config[4].text}</span>
      {config[1].map((el, index) => {
        return <span className={classes.LabelArrow} style={{...el}} key={index}></span>
      })}

    </div>
  )
}

export default Label
