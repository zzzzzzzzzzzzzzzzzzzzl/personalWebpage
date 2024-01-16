const items = ['fuckin footer']

function NavItem(props) {
  return <div className="navItem">{props.name}</div>
}

export function BottomNav() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="bottomNav">
        {items.map((itemName, index) => (
          <NavItem key={index} name={itemName} />
        ))}
      </div>
    </div>
  )
}
