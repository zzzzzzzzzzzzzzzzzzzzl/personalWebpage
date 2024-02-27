import { useAppSelector } from '../../hooks'
import { About } from './about/about'
import { Contact } from './contact/contact'
import { Education } from './education/education'
import { Experience } from './experience/experience'

export function Content() {
  const display = useAppSelector((state) => state.slice.display)

  return (
    <div className="content" style={{ padding: '100px' }}>
      <div className='about'>
       <About  />
        
      </div >
      <div className='experience'>
      <Experience />
        
      </div>
      <div className='education'>
       <Education />
        
      </div>
      <div className='contact'>
        
       <Contact />
      </div>
    </div>
  )
}
