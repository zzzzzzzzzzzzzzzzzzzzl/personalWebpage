import { useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import err from '../icons/error.png'
import war from '../icons/warn.png'
import a1 from '../topNav/topNavImages/1.png'
import a2 from '../topNav/topNavImages/2.png'
import a3 from '../topNav/topNavImages/3.png'
import a4 from '../topNav/topNavImages/4.png'
import a5 from '../topNav/topNavImages/5.png'
import a6 from '../topNav/topNavImages/6.png'
import store from '../../store'
import { toggleDisplay } from '../../slices/slice'
import { displayToggle } from '../../storeFunctions'

console.log()

function ErrWarn() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        paddingTop: '5px',
        paddingLeft: '30px',
      }}
    >
      <img src={err} className="navBarImg aha" alt="Error" />
      <img src={war} className="navBarImg aha" />
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
    <div className="aha" style={{ width: '10px' }}>
      <img
        src={images[props.imagesIdx]}
        style={{ padding: '8px', paddingTop: '10px' }}
        className="navBarImg aha"
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

  return (
    <>
      <div onClick={displayToggle}>
        <img
          src={images[1]}
          style={{
            paddingLeft: '30px',
            paddingRight: '8px',
            filter: saturation,
            paddingTop: '4px',
          }}
          className={`navBarImg ${saturation} aha`}
        />
      </div>
    </>
  )
}

function TopBarNavFloatRight() {
  return (
    <>
      <ErrWarn />

      <NavBarImg imagesIdx={3} />
      <div style={{ padding: '10px' }}></div>
      <NavBarImg imagesIdx={4} />
      <div style={{ padding: '10px' }}></div>

      <NavBarImg imagesIdx={5} />
      <div style={{ paddingLeft: '10px' }}></div>

      <NavBarImg imagesIdx={6} />
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

        <TopBarNavFloatRight />

        <div style={{ paddingLeft: '40px' }}></div>
      </div>
    </div>
  )
}

export default TopNav
