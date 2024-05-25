import React, { useState ,useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import "./Login.css"
import noteContext from '../context/noteContext';
import loader_gif from "./Resources/loader.gif";
const Login = () => {
    const Context = useContext(noteContext)
    const{loginToggle,setLoginToggle,loader,setLoader}=Context;
    const [credentials,setCredentials]=useState({email:"" , password:"" , email_signup:"" , password_signup:"" , Name:""})
   useEffect(()=>{setLoginToggle('hidden')},[setLoginToggle]);
  
    // TO toggle between Sign in & Sign Up form
   
    const toggle=()=>{
        if(loginToggle==='hidden'){
            setLoginToggle('active');
        }
        else
        {
            setLoginToggle('hidden');
        }
        setCredentials({email:"",password:"" , email_signup:"", password_signup:"" , Name:""})
    }

    
    const onChange = (ele) => {
        setCredentials({...credentials,[ele.target.name]:ele.target.value})
    }
        const navigate =useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();
        try{
        if(credentials.email && credentials.password)
            {
                setLoader(true);
     const response = await fetch(`https://my-book-backend-i0z0.onrender.com/sign_up/login`,{method:"POST", 
     headers:{'Content-Type':'application/json'},
    body:JSON.stringify({email:credentials.email,password:credentials.password})});
    const json = await response.json();
    console.log(json);
    setLoader(false);
    if(json.success) {
        //redirect
        localStorage.setItem('token' , json.authToken)
        navigate("/home");
        console.log("token== " +localStorage.getItem('token'));
    }
    else
    {
        alert("Invalid Credentials");
    }
    setCredentials({email:"",password:""})
}
else{
    alert("Enter Valid Entry");
}
        }catch(e){console.log("Unable to fetch")}
    }

    const handleSignup =async(e)=>{
        e.preventDefault()
        try{
        if(credentials.Name &&  credentials.email_signup && credentials.password_signup)
            {
            setLoader(true);
        const response = await fetch(`https://my-book-backend-i0z0.onrender.com/sign_up/signUp`,{method:"POST", headers:{'Content-Type':'application/json'},
    body:JSON.stringify({name:credentials.Name , email:credentials.email_signup,password:credentials.password_signup})});
    const json=await response.json()
    console.log(json);
    setLoader(false);
    if(json.userFound){
        let wantToLogin = window.confirm("User with this mail is already registered , please Log in Or Try different email ,Do you Want to log in");
        if(wantToLogin)
        {
            navigate("/login");
            setCredentials({email:credentials.email_signup,password:credentials.password_signup}) //placing values from signup page to sign in page
            setLoginToggle('hidden');
        }
        else
        {

        }
    }
    else{
        alert("User created Successfully");
        let wantToLogin=window.confirm("Do you Want to Login ?");
        if(wantToLogin)
        {
            navigate("/login");
            setCredentials({email:credentials.email_signup,password:credentials.password_signup}) //placing values from signup page to sign in page
            setLoginToggle('hidden');
        }
    }
}
    else{
        alert("Enter Valid entry")
    }
}catch(e){console.log("unable to fetch")}
    }
  return (<>
    {loader===true && <div style={{display:'flex', justifyContent:'center', padding:'50px'}}><img src={loader_gif} alt="Loading Content" style={{height:"100px", width:"100px"}} /></div>}
    {loader===false && <div className="loginBody">
    
    <div className={`container  ${loginToggle}  loginContainer`} id="container loginContainer">
        <div className="form-container sign-up">
            <form onSubmit={handleSignup}>
                <h1>Create Account</h1>
                <div className="social-icons">
                    <a href='https://www.google.com/' target="_blank" rel="noreferrer" className="icon"><i className="fa-brands fa-google-plus-g" style={{color: "#FFD43B"}}></i></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="icon"><i className="fa-brands fa-facebook-f" style={{color: "#3049ab"}}></i></a>
                    <a href='https://github.com/' target="_blank" rel="noreferrer" className="icon"><i className="fa-brands fa-github" style={{color: "#31363f"}}></i></a>
                    <a href='https://linkedin.com' target="_blank" rel="noreferrer" className="icon"><i className="fa-brands fa-linkedin-in" style={{color: "#3763ae"}}></i></a>
                </div>
                <span>or use your email for registeration</span>
                <input type="text" name="Name" id="Name" onChange={onChange} value={credentials.Name} placeholder="Name" minLength={3}/>
                <input type="email" name="email_signup" id="email_signup" onChange={onChange} value={credentials.email_signup} placeholder="Email"/>
                <input type="password" name="password_signup" id="password_signup" onChange={onChange} value={credentials.password_signup} minLength={8} placeholder="Password"/>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in">
            <form onSubmit={handleLogin}>
                <h1>Sign In</h1>
                <div className="social-icons">
                <a href='https://www.google.com/' target="_blank" rel="noreferrer" className="icon"><i className="fa-brands fa-google-plus-g" style={{color: "#FFD43B"}}></i></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="icon"><i className="fa-brands fa-facebook-f" style={{color: "#3049ab"}}></i></a>
                    <a href='https://github.com/' target="_blank" rel="noreferrer" className="icon"><i className="fa-brands fa-github" style={{color: "#31363f"}}></i></a>
                    <a href='https://linkedin.com' target="_blank" rel="noreferrer" className="icon"><i className="fa-brands fa-linkedin-in" style={{color: "#3763ae"}}></i></a>
                </div>
                <span>or use your email password</span>
                <input type="email" name='email' id="email" onChange={onChange} value={credentials.email} placeholder="Email"/>
                <input type="password" name='password' onChange={onChange} id="password" value={credentials.password} placeholder="Password"/>
                <i>Forget Your Password?</i>
                <button type='submit'>Sign In</button>
            </form>
        </div>
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Please do sign in to continue.</p>
                    <button className={`${loginToggle}`} id="login" onClick={toggle}>Sign In</button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Hello, Friend!</h1>
                    <p>Don't have account, Register here.</p>
                    <button className={`${loginToggle}`} id="register" onClick={toggle}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
      
    </div>}
    </>
  )
}

export default Login
