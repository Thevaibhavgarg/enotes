import React , {useContext} from 'react'
import noteContext from '../context/notes/notesContact'

const About = () => {
  const a = useContext(noteContext);
  return (
    <div>
      This is About {a.name}
    </div>
  )
}

export default About
