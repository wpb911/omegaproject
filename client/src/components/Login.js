import React from 'react';
import "./login.css";



const Login = () => {
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
                  <form className="form-signin" data-component="Form-Signin">
                  <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: 'center'}}> Sign in </h1>
                  <div className="social-login">
                    <button className="btn facebook-btn social-btn text-center" type="button"><span><i className="fab fa-facebook-f" /> Sign in with Facebook </span></button>
                    <button className="btn google-btn social-btn text-center" type="button"><span><i className="fab fa-google" /> Sign in with Google </span></button>
                  </div>
                  <p style={{textAlign: 'center'}}>OR</p>
                  <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                  <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                  <button className="btn btn-success btn-block" type="submit"><i className="fas fa-sign-in-alt" /> Sign in </button>
                  <hr />
                  <button className="btn btn-primary btn-block" type="button" id="btn-signup" onClick={onFormChange}>
                    <i className="fas fa-user-plus" /> Sign up with New Account
                  </button>
                </form>
                )
                : (
                  <form action="/signup/" className="form-signin">
<div className="social-login" style={{textAlign: 'center'}}>
  <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f" /> Sign up with Facebook </span></button>
</div>
<div className="social-login" style={{textAlign: 'center'}}>
  <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google" /> Sign up with Google </span></button>
</div>
<p style={{textAlign: 'center'}}>OR</p>
<input type="text" id="user-name" className="form-control" placeholder="Full name" required autoFocus />
<input type="email" id="user-email" className="form-control" placeholder="Email address" required autoFocus />
<input type="password" id="user-pass" className="form-control" placeholder="Password" required autoFocus />
<input type="password" id="user-repeatpass" className="form-control" placeholder="Repeat Password" required autoFocus />
<button className="btn btn-primary btn-block" type="submit"><i className="fas fa-user-plus" /> Sign Up </button>
<button id="btn-back" className= "fas fa-angle-left" type = "button" onClick={onFormChange}>Back</button>
</form>
                )
            }
            {/* <br />
              <p style={{textAlign: 'center'}} /> */}
          </div>
        

    )
}

export default Login;