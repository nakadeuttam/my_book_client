import React from 'react'
import "./Error.css"
import { useNavigate } from 'react-router-dom'
function Error() {
    const navigate = useNavigate();
  return (
    <div className='error-div'>
      <h5><b>404 : Page Not Found</b></h5>
      <button onClick={()=>{navigate("/")}}>Go Back to main page</button> 
    </div>
  )
}

export default Error
