import React from 'react';
import Layout from './Layout';
import jwt_decode from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

function Login() {
    const [ user, setUser ] = useState({});

    function handleCallbackResponse(response) {
        console.log("Ecoded JWT ID token: " + response.credential);
        let userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject)
        document.getElementById("signInDiv").hidden = true
    }

    function handleSignOut(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id:"397016409764-fr790sicqasrgke94vjqllq8aacc7anl.apps.googleusercontent.com",
            callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    )

    google.accounts.id.prompt();
    }, [])


    return (
        <>
            <Layout>

                <div id='login-container'>
                    <div className="login-container hidden">

                        <FontAwesomeIcon className='login-head' icon={ faCircleUser } />
                        <input className='login-email' placeholder='your e-mail' type="email" name="" />
                        <input className='login-password' placeholder='your password' type="password" name="" />
                        <button className='login-button'>login</button>

                        <div className="login-details">
                            <label>
                                <input className='login-keepme' placeholder='keep me logged in' type="checkbox" />
                                <p className='login-p1'>keep me logged in</p>
                            </label>
                            <NavLink className='login-navlink' to="*">forgot my details</NavLink>
                        </div>

                        <div className="dont-have">
                            <hr />
                            <p>don't have an account?</p>
                            <hr />
                        </div>

                        <button className='login-button'>sign up</button>

                        <div className="or-login-with">
                            <hr />
                            <p>or login with</p>
                            <hr />
                        </div>

                    </div>


                    <div className="google">

                        <div id="signInDiv"></div>
                        <div className="sign-out">

                            { Object.keys(user).length !== 0 &&
                                <button className='login-button' onClick={ (e) => handleSignOut(e) }>Sign out</button>
                            }

                            { user &&
                                <div className='acc-details'>
                                    <img src={user.picture} alt=""></img>
                                    <h3>{user.name}</h3>
                                </div>
                            }

                        </div>

                    </div>

                </div>

            
            </Layout>
        </>
    )
}

export default Login