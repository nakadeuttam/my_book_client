import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useGoogleLogin } from '@react-oauth/google'; // Import Google Login
import {googleAuth} from './api'
import "./Login.css";
import noteContext from '../context/noteContext';
import loader_gif from "./Resources/loader.gif";

const Login = () => {
    const Context = useContext(noteContext);
    const { loginToggle, setLoginToggle, loader, setLoader } = Context;
    const [credentials, setCredentials] = useState({ email: "", password: "", email_signup: "", password_signup: "", Name: "" });
    const navigate = useNavigate();

    useEffect(() => {
        setLoginToggle('hidden');
    }, [setLoginToggle]);

    const onChange = (ele) => {
        setCredentials({ ...credentials, [ele.target.name]: ele.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if (credentials.email && credentials.password) {
                setLoader(true);
                const response = await fetch(`https://my-book-backend-i0z0.onrender.com/sign_up/login`, {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: credentials.email, password: credentials.password })
                });
                const json = await response.json();
                console.log(json);
                setLoader(false);
                if (json.success) {
                    // Redirect
                    localStorage.setItem('token', json.authToken);
                    navigate("/home");
                    console.log("token== " + localStorage.getItem('token'));
                } else {
                    alert("Invalid Credentials");
                }
                setCredentials({ email: "", password: "" });
            } 
        } catch (e) {
            console.log("Unable to fetch");
        }
    };


    //Google Login
    const responseGoogle = async(authResult)=>{
        try {
            setLoader(true);
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
            {loader === true && <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
                <img src={loader_gif} alt="Loading Content" style={{ height: "100px", width: "100px" }} />
            </div>}
            {loader === false && <div className="loginBody">
                <div className={`container  ${loginToggle}  loginContainer`} id="container loginContainer">
                    <div className="form-container sign-in">
                        <form onSubmit={handleLogin} className="signIn-form">
                            <h1>Sign In</h1>
                            
                            <div className="social-icons">
                               <button className='sign-in-google-btn' onClick={handleGoogleLogin}><img className='google-btn-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="" />Login With Google</button>
                                
                            </div>
                            <div className="d-flex justify-content-between hr-line">
                                <hr></hr>or<hr></hr>
                            </div>
                            <div className="d-flex justify-content-start pass-label">
                                <label htmlFor="email">Email Address</label>
                            </div>
                            <input type="email" name='email' id="email" onChange={onChange} value={credentials.email} placeholder="Ex. Abc@xyz.com" />
                            <div className="d-flex justify-content-between pass-label">
                                <label htmlFor="password">Password</label><i>Forgot Password?</i>
                            </div>
                            <input type="password" name='password' onChange={onChange} id="password" value={credentials.password} placeholder="Password" />
                            <button  className='login-btn' type='submit'>Sign In</button>
                            <div className="d-flex justify-content-center pass-label" style={{ paddingTop: '30px', fontSize: 'smaller' }}>
                                New User?<i className="mx-2"><Link to="/signup">Create Account</Link></i>
                            </div>
                        </form>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default Login;
