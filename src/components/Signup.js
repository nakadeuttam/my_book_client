import React ,{useContext,useEffect} from 'react'
import Login from './Login'
import noteContext from '../context/noteContext';
const Signup = () => {
  const Context = useContext(noteContext)
  const{setLoginToggle}=Context;
  useEffect(()=>{setLoginToggle('active')},[setLoginToggle]);
  return (
    <>
   
    <Login></Login>
    </>
  )
}

export default Signup
