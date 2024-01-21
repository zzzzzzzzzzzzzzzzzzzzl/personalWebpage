import { educationObj } from './educationObj'
function EducationItem(props) {
  const obj = educationObj[props.skill]
  return (
    <div className="educationContainer">
      <div style={{ padding: '2px' }}></div>
      <div className="educationDetails" style={{}}>
        <div
          className="educationItem"
          style={{ maxWidth: '20vh', minWidth: '20vh' }}
        >
          {obj.date}
        </div>
        <div className="educationItem ">
          <div className="degree">{obj.degree}</div>
          <div className="school">{obj.school} </div>
        </div>
      </div>
      <div className="educationDetails" style={{}}>
        <div className="educationItem">{obj.location}</div>
        <div className="educationItem"></div>
      </div>
      <div style={{ padding: '2px' }}></div>
    </div>
  )
}

export function Education() {
  return (
    <div>
      <div style={{ fontSize: '40px' }}>Education</div>
      {Object.keys(educationObj).map((i) => {
        return <EducationItem skill={i} />
      })}
    </div>
  )
}
