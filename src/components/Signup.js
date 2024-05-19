import React ,{useState , useContext,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import noteContext from '../context/noteContext';
const Signup = () => {
  const Context = useContext(noteContext)
  const{loginToggle,setLoginToggle}=Context;
  useEffect(()=>{setLoginToggle('active')},[]);
  return (
    <>
   
    <Login></Login>
    </>
  )
}

export default Signup
