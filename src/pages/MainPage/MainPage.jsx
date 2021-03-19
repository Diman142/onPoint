import React, {useRef, useState} from 'react'
import classes from './MainPage.module.css'
import Range from '../../components/Range/Range'
import Label from '../../components/Label/Label'
import b from '../../assets/icons/b.svg'
import muscule from '../../assets/icons/musle.png'
import  liver from '../../assets/icons/liver.png'
import bud from '../../assets/icons/bud.png'
import lipid from '../../assets/icons/lipid.png'
import brain from '../../assets/icons/brain.png'
import bowel from '../../assets/icons/bowel.png'
import stomach from '../../assets/icons/stomach.png'
import infection from '../../assets/icons/infection.png'
import { Redirect } from 'react-router-dom'
import Nav from "../../containers/Nav/Nav";

const style1 = [
  [
    {
      position: 'absolute',
      top: '28%',
      left: '45%',
    },
    [{
      position: 'absolute',
      top: '55%',
      left: '-85%',
      width: '2px',
      height: '180px',
      background: '#fff',
      transform: 'rotate(45deg)'
    },
    {
      position: 'absolute',
      top: '55%',
      left: '185%',
      width: '2px',
      height: '180px',
      background: '#fff',
      transform: 'rotate(-45deg)'
    }
    ],
    b,
    {
      number: 1,
      style: {
        position: 'absolute',
        top: '-100%',
        left: '27%'
      }
    },
    {
      text: 'b-клетки',
      style: {
        position: 'absolute',
        top: '-33%',
        left: '0%'
      }
    }
  ],
  [
    {
      position: 'absolute',
      top: '56%',
      left: '24%',
    },
    [
      {
        position: 'absolute',
        top: '29%',
        left: '133%',
        width: '2px',
        height: '35px',
        background: '#fff',
        transform: 'rotate(-90deg)'
      }
    ],
    muscule,
    {
      number: 2,
      style: {
        position: 'absolute',
        top: '-112%',
        left: '30%'
      }
    },
    {
      text: 'Мышцы',
      style: {
        position: 'absolute',
        top: '-44%',
        left: '7%'
      }
    }
  ],
  [
    {
      position: 'absolute',
      top: '56%',
      left: '66%',
      backgroundSize:' 55px',
    },
    [
      {
        position: 'absolute',
        top: '29%',
        left: '-33%',
        width: '2px',
        height: '35px',
        background: '#fff',
        transform: 'rotate(90deg)'
      }
    ],
    liver,
    {
      number: 3,
      style: {
        position: 'absolute',
        top: '-112%',
        left: '30%'
      }
    },
    {
      text: 'Печень',
      style: {
        position: 'absolute',
        top: '-44%',
        left: '7%'
      }
    }
  ]
]


const style2 = [
  [
  {
    position: 'absolute',
    top: '28%',
    left: '31%',
  },
  [{
    position: 'absolute',
    top: '102%',
    left: '50%',
    width: '2px',
    height: '34px',
    background: '#fff',
  }],
  null,
  {
    number: 2,
    style: {
      position: 'absolute',
      top: '16%',
      left: '27%'
    }
  },
  {
    text: 'Инкретиновый эффект',
    style: {
      position: 'absolute',
      top: '21%',
      left: '-173%',
      width: "130px",
    }
}
],

[
  {
    position: 'absolute',
    top: '28%',
    left: '46%',
  },
  [{
    position: 'absolute',
    top: '102%',
    left: '50%',
    width: '2px',
    height: '34px',
    background: '#fff',
  }],
  b,
  {
    number: 1,
    style: {
      position: 'absolute',
      top: '-110%',
      left: '27%'
    }
  },
  {
    text: 'b-клетки',
    style: {
      position: 'absolute',
      top: '-40%',
      left: '0',
    }
}
],
[
  {
    position: 'absolute',
    top: '28%',
    left: '62%',
  },
  [{
    position: 'absolute',
    top: '102%',
    left: '50%',
    width: '2px',
    height: '34px',
    background: '#fff',
  }],
  null,
  {
    number: 3,
    style: {
      position: 'absolute',
      top: '16%',
      left: '30%'
    }
  },
  {
    text: 'Деффект а-клеток',
    style: {
      position: 'absolute',
      top: '21%',
      left: '115%',
      width: "90px",
    }
}
],

[
  {
    position: 'absolute',
    top: '50%',
    left: '16%',
    backgroundSize:' 55px',
  },
  [{
    position: 'absolute',
    top: '27%',
    left: '122%',
    width: '2px',
    height: '34px',
    background: '#fff',
    transform: 'rotate(-90deg)'
  }],
  bud,
  {
    number: 8,
    style: {
      position: 'absolute',
      top: '-36%',
      left: '-79%'
    }
  },
  {
    text: 'Почки',
    style: {
      position: 'absolute',
      top: '34%',
      left: '-116%',
      width: "90px",
      fontSize: "28px"
    }
}
],

[
  {
    position: 'absolute',
    top: '50%',
    left: '77%',
    backgroundSize:' 55px',
  },
  [{
    position: 'absolute',
    top: '27%',
    left: '-25%',
    width: '2px',
    height: '34px',
    background: '#fff',
    transform: 'rotate(90deg)'
  }],
  lipid,
  {
    number: 4,
    style: {
      position: 'absolute',
      top: '-36%',
      left: '140%'
    }
  },
  {
    text: 'Жир',
    style: {
      position: 'absolute',
      top: '34%',
      left: '116%',
      width: "90px",
      fontSize: "28px"
    }
}
],

[
  {
    position: 'absolute',
    top: '70%',
    left: '31%',
    backgroundSize:' 55px',
  },
  [{
    position: 'absolute',
    top: '-46%',
    left: '45%',
    width: '2px',
    height: '34px',
    background: '#fff',
    transform: 'rotate(180deg)'
  }],
  brain,
  {
    number: 7,
    style: {
      position: 'absolute',
      top: '102%',
      left: '32%'
    }
  },
  {
    text: 'Почки',
    style: {
      position: 'absolute',
      top: '165%',
      left: '12%',
      width: "90px",
      fontSize: "20px"
    }
}
],

[
  {
    position: 'absolute',
    top: '70%',
    left: '46%',
    backgroundSize:' 55px',
  },
  [{
    position: 'absolute',
    top: '-46%',
    left: '45%',
    width: '2px',
    height: '34px',
    background: '#fff',
    transform: 'rotate(180deg)'
  }],
  liver,
  {
    number: 6,
    style: {
      position: 'absolute',
      top: '102%',
      left: '32%'
    }
  },
  {
    text: 'Печень',
    style: {
      position: 'absolute',
      top: '165%',
      left: '12%',
      width: "90px",
      fontSize: "20px"
    }
}
],

[
  {
    position: 'absolute',
    top: '70%',
    left: '62%',
    backgroundSize:' 55px',
  },
  [{
    position: 'absolute',
    top: '-46%',
    left: '45%',
    width: '2px',
    height: '34px',
    background: '#fff',
    transform: 'rotate(180deg)'
  }],
  muscule,
  {
    number: 5,
    style: {
      position: 'absolute',
      top: '102%',
      left: '32%'
    }
  },
  {
    text: 'Мышцы',
    style: {
      position: 'absolute',
      top: '165%',
      left: '12%',
      width: "90px",
      fontSize: "20px"
    }
}
],
]




const style3 = [
  [
    {
      width: '120px',
      height: '120px',
      position: 'absolute',
      top: '10%',
      left: '45%',
    },
    [{
      position: 'absolute',
      top: '102%',
      left: '50%',
      width: '2px',
      height: '270px',
      background: '#fff',
    },
    {
      position: 'absolute',
      top: '102%',
      left: '25%',
      width: '2px',
      height: '95px',
      background: '#fff',
    },
    {
      position: 'absolute',
      top: '102%',
      left: '70%',
      width: '2px',
      height: '95px',
      background: '#fff',
    },
    {
      position: 'absolute',
      top: '-8%',
      left: '-71%',
      width: '2px',
      height: '150px',
      background: '#fff',
      transform: 'rotate(78deg)'
    },
    {
      position: 'absolute',
      top: '7%',
      left: '-77%',
      width: '2px',
      height: '150px',
      background: '#fff',
      transform: 'rotate(258deg)'
    },
    {
      position: 'absolute',
      top: '0%',
      left: '175%',
      width: '2px',
      height: '150px',
      background: '#fff',
      transform: 'rotate(99deg)'
    },
    {
      position: 'absolute',
      top: '-15%',
      left: '166%',
      width: '2px',
      height: '150px',
      background: '#fff',
      transform: 'rotate(279deg)'
    },

    {
      position: 'absolute',
      top: '42%',
      left: '-71%',
      width: '2px',
      height: '220px',
      background: '#fff',
      transform: 'rotate(53deg)'
    },
    {
      position: 'absolute',
      top: '60%',
      left: '-70%',
      width: '2px',
      height: '220px',
      background: '#fff',
      transform: 'rotate(233deg)'
    },

    {
      position: 'absolute',
      top: '70%',
      left: '-56%',
      width: '2px',
      height: '272px',
      background: '#fff',
      transform: 'rotate(41deg)'
    }
  ],
    b,
    {
      number: 1,
      style: {
        position: 'absolute',
        top: '-50%',
        left: '0%'
      }
    },
    {
      text: 'b-клетки',
      style: {
        position: 'absolute',
        top: '-32%',
        left: '43%',
        width: '100px',
        fontSize: '22px'
      }
    }
  ],


  [
    {
      position: 'absolute',
      top: '19%',
      left: '20%',
      backgroundSize:' 55px',
    },
    [],
    bowel,
    {
      number: 8,
      style: {
        position: 'absolute',
        top: '-42%',
        left: '-107%'
      }
    },
    {
      text: 'Микрофлора кишечника',
      style: {
        position: 'absolute',
        top: '28%',
        left: '-163%',
        width: "90px",
        fontSize: "20px"
      }
  }
  ],

   [
    {
      position: 'absolute',
      top: '40%',
      left: '20%',
      backgroundSize:' 55px',
    },
    [],
    infection,
    {
      number: 9,
      style: {
        position: 'absolute',
        top: '-42%',
        left: '-107%'
      }
    },
    {
      text: 'Нарушение именной регуляции / воспаление',
      style: {
        position: 'absolute',
        top: '28%',
        left: '-163%',
        width: "140px",
        fontSize: "20px"
      }
  }
  ],

  [
    {
      position: 'absolute',
      top: '60%',
      left: '20%',
      backgroundSize:' 55px',
    },
    [{
      position: 'absolute',
      top: '-37%',
      left: '48%',
      width: '2px',
      height: '12px',
      background: '#fff',
      transform: 'rotate(0)'
    }],
    stomach,
    {
      number: 10,
      style: {
        position: 'absolute',
        top: '0%',
        left: '-107%'
      }
    },
    {
      text: 'Желудок',
      style: {
        position: 'absolute',
        top: '60%',
        left: '-120%',
        fontSize: "20px"
      }
  }
  ],

  [
    {
      position: 'absolute',
      top: '72%',
      left: '47.5%',
      backgroundSize:' 55px',
    },
    [{
      position: 'absolute',
      top: '-20%',
      left: '26%',
      width: '2px',
      height: '12px',
      background: '#fff',
      transform: 'rotate(180deg)'
    },
    {
      position: 'absolute',
      top: '-37%',
      left: '60%',
      width: '2px',
      height: '12px',
      background: '#fff',
      transform: 'rotate(0)'
    }],
    bud,
    {
      number: 11,
      style: {
        position: 'absolute',
        top: '0%',
        left: '-107%'
      }
    },
    {
      text: 'Почки',
      style: {
        position: 'absolute',
        top: '60%',
        left: "-105%",
        fontSize: "20px"
      }
  }
  ],

  [
    {
      position: 'absolute',
      top: '19%',
      left: '74%',
      backgroundSize:' 55px',
    },
    [{
      position: 'absolute',
      top: '123%',
      left: '36%',
      width: '2px',
      height: '12px',
      background: '#fff',
      transform: 'rotate(180deg)'
    },
    {
      position: 'absolute',
      top: '106%',
      left: '63%',
      width: '2px',
      height: '12px',
      background: '#fff',
      transform: 'rotate(0)'
    }],
    brain,
    {
      number: 7,
      style: {
        position: 'absolute',
        top: '-42%',
        left: '107%'
      }
    },
    {
      text: 'Почки',
      style: {
        position: 'absolute',
        top: '29%',
        left: '110%',
        fontSize: "20px"
      }
  }
  ],
]


const MainPage = () => {

  let tab1 = useRef(null)
  let tab2 = useRef(null)
  let tab3 = useRef(null)

  const [toPrevPage, setToPrevPage] = useState(false)

  let startY = 0
  let endY = 0

  return (
    <>
    {toPrevPage ? <Redirect to="/hero"/> :
    <section className={classes.Main} onTouchStart={(event) => {
      startY = event.targetTouches[0].clientY
    }} onTouchMove={(event) => {
      endY = event.targetTouches[0].clientY
    }} onTouchEnd={() => {
      if(endY - startY > 90){
        setToPrevPage(true)
      }
    }}>
      <Nav activePage={3}/>
      <div className={classes.MainTabContainer} >

      <div className={classes.MainTabWrapper}>

        <div className={classes.MainTabOne} ref={tab1}>
          {style1.map((item, index) => {
            return <Label config={item} key={index}/>
          })}
          <p className={classes.MainTabOneText}>Гипоглекимия</p>
        </div>

        <div className={classes.MainTabTwo} ref={tab2}>
          {style2.map((item,index) => {
            return <Label config={item} key={index}/>
          })}
          <p className={classes.MainTabTwoText}>Гипергликимия</p>
        </div>

        <div className={classes.MainTabThree} ref={tab3}>
        {style3.map((item, index) => {
            return <Label config={item} key={index}/>

          })}
          <p className={classes.MainTabthreeNote}>амилин</p>
          <div className={classes.MainTabthreeSecond}>
            <span className={classes.MainTabthreeNumber}>2</span>
            <span className={classes.MainTabthreeText}>Инкретинового эффекта</span>
            <span className={classes.MainTabthreeArrow}></span>

          </div>
          <div className={classes.MainTabthreeThree}>
            <span className={classes.MainTabthreeThreeNumber}>3 </span>
            <span className={classes.MainTabthreeThreeText}>Деффекта a-клеток</span>
            <span className={classes.MainTabthreeThreeNote}>Глюкатон</span>
            <span className={classes.MainTabThreeThreeArrow}></span>
            <p className={classes.MainTabthreeMainText}>Гипергликимия</p>
          </div>

          <div className={classes.MainTabthreeResistence}>
            <h3 className={classes.MainTabthreeResistenceTitle}>Инсулинорезистенность</h3>
            <div className={classes.MainTabthreeResistenceContainer}>
              <span className={classes.MainTabthreeResistenceIcon} style={{backgroundImage: `url(${liver})`, backgroundSize: '55px'}}></span>
              <div className={classes.MainTabthreeResistenceWrap}>
                <span className={classes.MainTabthreeResistenceNum}>6</span>
                <span className={classes.MainTabthreeResistenceText}>Печень</span>
              </div>
            </div>
            <div className={classes.MainTabthreeResistenceContainer}>
              <span className={classes.MainTabthreeResistenceIcon} style={{backgroundImage: `url(${muscule})`}}></span>
              <div className={classes.MainTabthreeResistenceWrap}>
                <span className={classes.MainTabthreeResistenceNum}>5</span>
                <span className={classes.MainTabthreeResistenceText}>Мышцы</span>
              </div>
            </div>
            <div className={classes.MainTabthreeResistenceContainer}>
              <span className={classes.MainTabthreeResistenceIcon} style={{backgroundImage: `url(${lipid})`}}></span>
              <div className={classes.MainTabthreeResistenceWrap}>
                <span className={classes.MainTabthreeResistenceNum}>4</span>
                <span className={classes.MainTabthreeResistenceText}>Жир</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>
        <Range tab1 = {tab1} tab2 = {tab2}  tab3 = {tab3}/>

    </section>
    }
    </>
  )
}

export default MainPage
