import { SkillsGrid } from './skillsGrid'
import me from './me.jpg'
import React from 'react'
function changeUrl() {
  console.log('hssssere')
  // window.location.href = 'cv.pdf'
}

class AboutDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div> I'm James Edwards</div>
        <div>Juniour Web Dev</div>
        <div className="aboutDetails">
          <AboutDetailsItem name="CV" link="cv.pdf" />
          <AboutDetailsItem
            name="Linkden"
            link="https://www.linkedin.com/in/james-edwards-692a08273/"
          />
          <AboutDetailsItem
            name="github"
            link="https://github.com/zzzzzzzzzzzzzzzzzzzzl"
          />
        </div>
      </div>
    )
  }
}

class AboutDetailsItem extends React.Component {
  handleClick = () => {
    window.location.href = this.props.link
  }

  render() {
    return (
      <div className="aboutDetailsItem" onClick={this.handleClick}>
        {' '}
        {this.props.name}
      </div>
    )
  }
}

// function AboutDetails() {
//   return (
//     <div>
//       <div> I'm James Edwards</div>
//       <div>Juniour Web Dev</div>
//       <div className="aboutDetails">
//         <div className="aboutDetailsItem" onClick={changeUrl()}>
//           CV
//         </div>
//         <div className="aboutDetailsItem"> LinkedIn</div>
//         <div className="aboutDetailsItem"> GitHub</div>
//       </div>
//     </div>
//   )
// }
function MeImg() {
  return (
    <div style={{ paddingBottom: '50px', paddingTop: '150px' }}>
      <div style={{ padding: '40px', fontSize: '28px' }}> About</div>
      <img src={me} style={{ borderRadius: '600px' }} />
    </div>
  )
}
export function About() {
  return (
    <div>
      <AboutDetails name="oogabooaga" />
      <MeImg />
      <SkillsGrid />
    </div>
  )
}
