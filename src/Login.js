import { Button } from '@mui/material';
import React  from 'react';
import { auth, provider } from './firebase';
import "./Login.css";



function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            localStorage.setItem('data', JSON.stringify(result));
            window.location.reload();
        }
        ).catch((error) => alert(error.message));
    };

    

    return (
        <div className="login">
            <div className="login_container">
                <img className="whatsapp_image" src="https://www.freepnglogos.com/uploads/whatsapp-logo-light-green-png-0.png" ></img>
            <div className="login_text">
                <h2>SIGN IN WITH GOOGLE</h2>
            </div>
            <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login
