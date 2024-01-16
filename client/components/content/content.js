import { useAppSelector } from '../../hooks'
import { About } from './about'
import { Contact } from './contact'
import { Education } from './education'
import { Experience } from './experience'

export function Content() {
  const display = useAppSelector((state) => state.slice.display)
  console.log(display)
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
    <div className="content">
      here is some content
      {componentToRender}
    </div>
  )
}
