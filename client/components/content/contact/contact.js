import { Font } from 'p5'
import { contactObj } from './contactObj'

function Info(props) {
  const obj = contactObj[props.name]
  return (
    <div style={{ padding: '5px', backgroundColor: '' }}>
      <div
        style={{
          backgroundColor: ' #3498db',
          display: 'inline-block',
          padding: '12px',
          borderRadius: '5px',
        }}
      >
        {obj.svg}
      </div>
      <div style={{ padding: '5px' }}>
        <div> {props.name} me at</div>
        <div style={{ fontSize: '13px', color: 'rgb(200,200,200)' }}>
          {obj.detail}
        </div>
      </div>
    </div>
  )
}

export function Contact() {
  return (
    <div>
      <Info name="phone" />
      <Info name="email" />
    </div>
  )
}
