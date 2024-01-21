import { skillsObj } from './skillsObj'

function Skill(props) {
  return <div className="skillsContainerItem">{props.name} </div>
}
function SkillsItems(props) {
  return (
    <div
      style={{
        width: '300px',
        height: '200px',
      }}
    >
      <div className="skillItem">
        <div className="centerdDiv">
          <div className="skillSVG centerdDiv" style={{}}>
            {skillsObj[props.skill].svg}
          </div>
        </div>
        <div style={{ padding: '16px', fontSize: '28px' }}>{props.skill}</div>
        <div className="skillsContainer">
          {skillsObj[props.skill].skillsArr.map((i) => {
            return <Skill name={i} />
          })}
        </div>
      </div>
    </div>
  )
}
export function SkillsGrid() {
  return (
    <div className="centerdDiv" style={{ width: '100%' }}>
      <div className="skills">
        {Object.keys(skillsObj).map((i) => {
          return <SkillsItems skill={i} />
        })}
      </div>
    </div>
  )
}
