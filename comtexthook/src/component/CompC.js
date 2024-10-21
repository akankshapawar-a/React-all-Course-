import React ,{useContext} from 'react'
import {AppState } from '../App';
const CompC = () => {
    const appdata=useContext(AppState);

  return (
    <div className='compc'>

      <p>Compc</p>
      <h1>{appdata}</h1>
    </div>
  )
}

export default CompC
