import { experienceObj } from './experienceObj'
function EducationItem(props) {
  const obj = experienceObj[props.skill]
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
        <div className=" ">
          <div className="">{obj.degree}</div>
          <div className="" style={{ textAlign: 'left' }}>
            <div
              dangerouslySetInnerHTML={{
                __html: obj.responsobilities.replace(/\n/g, '<br>'),
              }}
            />
            {}{' '}
          </div>
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

export function Experience() {
  return (
    <div>
      <div style={{ fontSize: '40px' }}>Experience</div>
      {Object.keys(experienceObj).map((i) => {
        return <EducationItem skill={i} />
      })}
    </div>
  )
}
