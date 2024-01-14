import { useLocation } from 'react-router-dom'
import React, { useState } from 'react'

import err from '../icons/error.png'
import war from '../icons/warn.png'
import a1 from '../topNav/topNavImages/1.png'
import a2 from '../topNav/topNavImages/2.png'
import a3 from '../topNav/topNavImages/3.png'
import a4 from '../topNav/topNavImages/4.png'
import a5 from '../topNav/topNavImages/5.png'
import a6 from '../topNav/topNavImages/6.png'

console.log()

function ErrWarn() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        paddingTop: '5px',
      }}
    >
      <img src={err} className="navBarImg" alt="Error" />
      <img src={war} className="navBarImg" />
    </div>
  )
}

const NavArr = ['', 'Elements', 'Console']
const images = [a1, a2, a3, a4, a5, a6]

console.warn('eww')
console.warn('eww')
console.warn('eww')
console.warn('eww')

function NavBarImg(props) {
  return (
    <div>
      <img
        src={images[props.imagesIdx]}
        style={{ padding: '4px' }}
        className="navBarImg"
      />
    </div>
  )
}

//I dont know how to make this code more readable becasue of the inner react functions
function NavItems(props) {
  const location = useLocation()

  function storePreviousURL() {
    const path = location.pathname.replace(/^\//, '')
    localStorage.setItem('previousURL', path)
  }

  function getPreviousURL() {
    return localStorage.getItem('previousURL')
  }
  const path = location.pathname.replace(/^\//, '')
  if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    localStorage.setItem('previousURL', path)
  }
  let style
  let animateBorder

  if (path == props.name) {
    const animate = NavArr.indexOf(getPreviousURL()) - NavArr.indexOf(path)

    const newstyle = document.createElement('style')

    newstyle.appendChild(
      document.createTextNode(`
      @keyframes slideInFromLeft {
        from {
          left: ${animate * 70}%;
        }
        to {
          left: 0;
        }
      }
    `)
    )

    document.head.appendChild(newstyle)

    animateBorder = {
      position: 'relative',
      animation: 'slideInFromLeft .3s forwards',
      borderBottom: '2px solid rgb(124,172,248)',
    }
    style = {
      color: 'rgb(168,199,250)',
    }
  }

  return (
    <a href={`/${props.name}`} className="parent" onClick={storePreviousURL}>
      <div className="navBarChildren" style={style}>
        {props.name ? props.name : 'Home'}
      </div>
      <div className={`border`} style={animateBorder}></div>
    </a>
  )
}

function ToggleDevice() {
  let saturation = ''
  let local
  if (localStorage.getItem('toggleDevice') == 'true') {
    saturation = 'sat'
    local = true
  }
  const [isToggleOn, setIsToggleOn] = useState(local)

  function toggle() {
    setIsToggleOn(!isToggleOn)
    localStorage.setItem('toggleDevice', !isToggleOn)
  }

  return (
    <>
      <div onClick={toggle}>
        <img
          src={images[1]}
          style={{ padding: '4px', filter: saturation }}
          className={`navBarImg ${saturation}`}
        />
      </div>
    </>
  )
}

function TopNav() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      <div className="navBar nav">
        <NavBarImg imagesIdx={0} />
        <ToggleDevice />
        <div
          style={{
            borderRight: '1px solid rgb(94, 94, 94)',
            height: '20px',
            margin: '8px',
            marginRight: '15px',
          }}
        ></div>
        {NavArr.map((item, index) => (
          <NavItems key={index} name={item} />
        ))}
        <NavBarImg imagesIdx={2} />

        <ErrWarn />
        <NavBarImg imagesIdx={3} />
        <NavBarImg imagesIdx={4} />
        <NavBarImg imagesIdx={5} />
        <NavBarImg imagesIdx={6} />
        <div style={{ paddingLeft: '40px' }}></div>
      </div>
    </div>
  )
}

export default TopNav
