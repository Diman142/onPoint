import React from 'react'
import classes from './Loader.module.css'



const Loader = ({config}) => {


  console.log(config)

  return (
    <div style={{...config[0]}}>
      <span style={{...config[1]}}>{config[3]}</span>
      <div className={classes.Ripple} style={{
        ...config[2]
      }}><div></div><div></div></div>
    </div>
  )
}


export default Loader
