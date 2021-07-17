import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import './Login.css';
import {actionTypes} from './reducer';
import {useStateValue} from './StateProvider';
function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () =>{
        //SignIn...
        auth
            .signInWithPopup(provider)
            .then((result) => {
               dispatch({
                   type:actionTypes.SET_USER,
                   user:result.user,
               })
            })
            .catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://www.linkpicture.com/q/facebook-logo-2019-1597680-1350125.png" alt="picture" />
                <img src="https://www.linkpicture.com/q/1280px-Facebook_Logo_-2019.svg.png" className="facebook__text" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In 
            </Button>
        </div>
    )
}

export default Login
