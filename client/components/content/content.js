import { useAppSelector } from '../../hooks'
import { About } from './about/about'
import { Contact } from './contact'
import { Education } from './education/education'
import { Experience } from './experience/experience'

export function Content() {
  const display = useAppSelector((state) => state.slice.display)
  let componentToRender
  switch (display) {
    case 'About':
      componentToRender = <About />
      break
    case 'Experience':
      componentToRender = <Experience />
      break
    case 'Education':
      componentToRender = <Education />
      break
    case 'Contact':
      componentToRender = <Contact />
      break
    default:
      componentToRender = <About />
      break
  }

  return (
    <div className="content" style={{ padding: '100px' }}>
      {componentToRender}
    </div>
  )
}
