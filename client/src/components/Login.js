import React, { useState } from 'react';
import "./login.css";
import auth from "../utils/auth";
import api from "../utils/register-api";

const Login = () => {
  // Gets old user info
  const [inputEmail, setEmail] = useState("");
  const [inputPassword, setPassword] = useState("");
  // console.log(inputEmail, inputPassword);

  // Saves new user info
  const [signupEmail, setNewEmail] = useState("");
  const [signupName, setName] = useState("");
  const [signupPassword, setNewPassword] = useState("");
  const [verifyPassword, verifyNewPassword] = useState("");
  // console.log(signupName, signupEmail, signupPassword, verifyPassword);
  // Tries to use login component

  // Handles error
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(inputEmail, inputPassword);
    console.log(signupName, signupEmail, signupPassword, verifyPassword);
    const email = signupEmail;
    const password = signupPassword;
    // try {
    // <----------- API Authenitcation is HERE ------------->
    // api({email, password})
    //   .then((data) => {
    //     // success - here
    //   })
    //   .catch(() => {
    //     // error -
    //   });
    try {
      await api.register({email,password});

    } catch (err) {
      console.log(err)
    }

    //User has been successfully logged in and added to state.  Perform any additional actions you need here such as redirecting to a new page.
    // } catch (err) {
    // handle error responses from the API
    // if (err.response && err.response.data) console.log(err.response.data);
    // }
    // 
  }

  // Switches between Login/Signup --> Should be broken into 2 components
  const [signUpForm, setsignUpForm] = React.useState(true)
  const onFormChange = React.useCallback((evt) => {
    const id = evt.target.id
    console.log(id);
    setsignUpForm(id === 'btn-signup' ? false : true)
  }, [])

  return (

    <div id="logreg-forms">
      {
        signUpForm
          ? (
            <form className="form-signin" onSubmit={handleSubmit} data-component="Form-Signin">
              <h1 className="h3 mb-3 font-weight-normal" style={{ textAlign: 'center' }}> Sign in </h1>
              <div className="social-login">
                <button className="btn facebook-btn social-btn text-center" type="button"><span><i className="fab fa-facebook-f" /> Sign in with Facebook </span></button>
                <button className="btn google-btn social-btn text-center" type="button"><span><i className="fab fa-google" /> Sign in with Google </span></button>
              </div>
              <p style={{ textAlign: 'center' }}>OR</p>
              <input type="email" onChange={(e) => setEmail(e.target.value)} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
              <input type="password" onChange={(e) => setPassword(e.target.value)} id="inputPassword" className="form-control" placeholder="Password" required />
              <button className="btn btn-success btn-block" onSubmit={handleSubmit} type="submit"><i className="fas fa-sign-in-alt" /> Sign in </button>
              <hr />
              <button className="btn btn-primary btn-block" type="button" id="btn-signup" onClick={onFormChange}>
                <i className="fas fa-user-plus" /> Sign up with New Account
                  </button>
            </form>
          )
          : (
            <form action="/signup/" onSubmit={handleSubmit} className="form-signin">
              <div className="social-login" style={{ textAlign: 'center' }}>
                <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f" /> Sign up with Facebook </span></button>
              </div>
              <div className="social-login" style={{ textAlign: 'center' }}>
                <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google" /> Sign up with Google </span></button>
              </div>
              <p style={{ textAlign: 'center' }}>OR</p>
              <input type="text" onChange={(e) => setName(e.target.value)} id="user-name" className="form-control" placeholder="Full name" required autoFocus />
              <input type="email" onChange={(e) => setNewEmail(e.target.value)} id="user-email" className="form-control" placeholder="Email address" required autoFocus />
              <input type="password" onChange={(e) => setNewPassword(e.target.value)} id="user-pass" className="form-control" placeholder="Password" required autoFocus />
              <input type="password" onChange={(e) => verifyNewPassword(e.target.value)} id="user-repeatpass" className="form-control" placeholder="Repeat Password" required autoFocus />
              <button className="btn btn-primary btn-block" type="submit"><i className="fas fa-user-plus" /> Sign Up </button>
              <button id="btn-back" className="fas fa-angle-left" type="button" onClick={onFormChange}>Back</button>
            </form>
          )
      }
      {/* <br />
              <p style={{textAlign: 'center'}} /> */}
    </div>


  )
}

export default Login;



// const SignIn = () => {
//     const [inputEmail, setEmail] = useState("");
//     const [inputPassword, setPassword] = useState("");
//     // console.log(inputEmail, inputPassword);

//     const handleSubmit = e => {
//       e.preventDefault();
//     }
// }

// const SignUp = () =>{
//   const [signupEmail, setNewEmail] = useState("");
//   const[signupName, setName] = useState("");
//   const [signupPassword, setNewPassword] = useState("");
//   const [verifyPassword, verifyNewPassword] = useState("");
//   console.log(signupName, signupEmail, signupPassword, verifyPassword);
//   const handleSubmit = e => {
//     e.preventDefault();
//   }
// }