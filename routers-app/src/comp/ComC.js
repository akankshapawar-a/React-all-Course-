import React , {useContext} from 'react';
import {AppState} from '../App';


function ComC() {
  const appState=useContext(AppState)
  return (
    <div className='compc'>
    <div>
      comC
    </div>
    <h1>{appState.data}</h1>
    <h1>name:{appState.name.name}</h1>
    <h1>age:{appState.name.age}</h1>

    </div>
  )
}

export default ComC
