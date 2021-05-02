import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../../firebase';
import { actionTypes } from '../../Templates/reducer';
import { useStateValue } from '../../Templates/StateProvider';

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
          alt=""
        />
        <h1>Sign In to Naor's Slack Clone</h1>
        <p>github.com/NaorBenShushan</p>
        <Button onClick={signIn}> Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
