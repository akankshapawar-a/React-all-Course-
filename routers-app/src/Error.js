import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
function Error() {
  const navigate=useNavigate()
  return (
    <div>
    <h1>  404 Page Found </h1>
<button onClick={()=>navigate(-1)} >Go Back</button>
    </div>
  )
}

export default Error
