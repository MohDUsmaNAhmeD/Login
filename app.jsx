import React from 'react';

export function App(props) {
  return (
    <div className='App'>
      <h1>WELCOME BACK!</h1>
      <p />Welcome back!Please enter your details.
      <h2 /> EMAIL 
      <br />
      <input type="email" placeholder="Enter Your Email"/>
      <h2 />Password
      <br />
      <input type="email" placeholder="Enter Your Email"/>
      <span><input type="checkbox"/><p>Remember Me</p>
      <a href="#">Forgot Password?</a>
      </span>
      <input type="button" value="Sign In" />
      <span className="btn">
        <img src="https://events.kmitl.ac.th/images/icons/google.png" alt="" />
        <p>Sign In with Google account</p>
      </span>
      <p>Don't have an account <a href="#">Sign Up For free</a></p>
 </div>
  );
}
