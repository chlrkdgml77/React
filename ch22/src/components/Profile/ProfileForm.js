import React, {useRef, useContext} from 'react';

import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);

  const newPwInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPw = newPwInputRef.current.value;

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBFcQESkkq5PoYHZKYPknelurw2ltkF-O4", {
      method: "POST",
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPw,
        returnSecureToken: false
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      
    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPwInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
