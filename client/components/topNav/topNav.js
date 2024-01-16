import { useSelector } from 'react-redux'

import { useAppDispatch } from '../../hooks'
import { toggleDisplay } from '../../slices/slice'

const items = ['About', 'Education', 'Experience', 'Contact']

function NavItem(props) {
  const dispatch = useAppDispatch()
  const loadPage = () => {
    dispatch(toggleDisplay(props.name))
    console.log(props.name)
    return
  }
  return (
    <div className="navItem" onClick={loadPage}>
      {props.name}
    </div>
  )
}

export function TopNav() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="topNav">
        {items.map((itemName, index) => (
          <NavItem key={index} name={itemName} />
        ))}
      </div>
    </div>
  )
}
