import { SkillsGrid } from './skillsGrid'

import me from './me.jpg'

function AboutDetails() {
  return (
    <div>
      <div> I'm James Edwards</div>
      <div>Senior Web Engineer @ Viu</div>
      <div className="aboutDetails">
        <div className="aboutDetailsItem"> Download CV</div>
        <div className="aboutDetailsItem"> LinkedIn</div>
        <div className="aboutDetailsItem"> GitHub</div>
      </div>
    </div>
  )
}
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
      <AboutDetails />
      <MeImg />
      <SkillsGrid />
    </div>
  )
}
