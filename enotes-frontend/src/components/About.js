import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/notesContact'
import {useNavigate} from 'react-router-dom';

const About = () => {
  const context = useContext(noteContext);
  const { getDetails , details } = context;
  let navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token')){
      getDetails();
    }
    else{
        navigate("/login");
    }
    // eslint-disable-next-line
}, [])
  return (
    <div className='container'>
      <ul className="list-group">
        <li className="list-group-item"><b>Nmae: </b>{details.name}</li>
        <li className="list-group-item"><b>Email: </b>{details.email}</li>
        <li className="list-group-item"><b>Account Created Date: </b>{new Date(details.date).toGMTString()}</li>
      </ul>
    </div>
  )
}

export default About
