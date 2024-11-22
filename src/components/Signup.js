import React ,{useContext,useEffect,useState} from 'react'
import noteContext from '../context/noteContext';
import {useNavigate,Link} from 'react-router-dom'
import loader_gif from "./Resources/loader.gif";
import './Signup.css'
import {useGoogleLogin } from '@react-oauth/google'; // Import Google Login
import {googleAuth} from './api'
const Signup = () => {
  const Context = useContext(noteContext)
  const{setLoginToggle,loader,setLoader}=Context;
  useEffect(()=>{setLoginToggle('active')},[setLoginToggle]);

  const [credentials,setCredentials]=useState({email:"" , password:"" , email_signup:"" , password_signup:"" , Name:""})

  const onChange = (ele) => {
    setCredentials({...credentials,[ele.target.name]:ele.target.value})
}
    const navigate =useNavigate();
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
    }catch(e){console.log("unable to fetch")}
        }
        //Google Login
    const responseGoogle = async(authResult)=>{
        try {
            console.log(authResult['code'])
            if(authResult['code']){
                const result = await googleAuth(authResult['code']);
                const json = await result.data;
                setLoader(false);
                if (json.success) {
                    // Redirect
                    localStorage.setItem('token', json.authToken);
                    navigate("/home");
                    console.log("token== " + localStorage.getItem('token'));
                } else {
                    alert("Invalid Credentials");
                }
            }

        }catch(err){ console.log("error while reqesting googlecode" , err)}
    }

    const handleGoogleLogin =useGoogleLogin({
        onSuccess:responseGoogle,
        onError:responseGoogle,
        flow:'auth-code'
    })
  return (
    <>
    
     {loader===true && <div style={{display:'flex', justifyContent:'center', padding:'50px'}}><img src={loader_gif} alt="Loading Content" style={{height:"100px", width:"100px"}} /></div>}
     {loader===false && <div className="loginBody">
    <div className="form-container sign-up">
            <form onSubmit={handleSignup} className="sign-up-form">
                <h1>Create Account</h1>
                <div className="social-icons">
                    <button className='sign-in-google-btn' onClick={handleGoogleLogin}><img className='google-btn-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="" />Login With Google</button>
                </div>
                <div className="d-flex justify-content-between hr-line"><hr></hr>or<hr></hr></div>
                <div className="d-flex justify-content-start pass-label"><label htmlFor="Name">Name</label></div>
                <input type="text" name="Name" id="Name" onChange={onChange} value={credentials.Name} placeholder="Ex. Uttam Nakade" minLength={3}/>
                <div className="d-flex justify-content-start pass-label"><label htmlFor="email_signup">Email</label></div>
                <input type="email" name="email_signup" id="email_signup" onChange={onChange} value={credentials.email_signup} placeholder="Abc@xyz.com"/>
                <div className="d-flex justify-content-start pass-label"><label htmlFor="password_signup">Password</label></div>
                <input type="password" name="password_signup" id="password_signup" onChange={onChange} value={credentials.password_signup} minLength={8} placeholder="Password"/>
                <button className='login-btn' type='submit'>Sign Up</button>
                <div className="d-flex justify-content-center pass-label" style={{paddingTop:'30px', fontSize:'smaller'}}>Already have account?<i className="mx-2"><Link to="/login">Sign In</Link></i></div>

            </form>
        </div>
        </div>}
        
    </>
  )
}

export default Signup
