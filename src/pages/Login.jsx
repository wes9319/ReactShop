import React from 'react';
import '../styles/Login.scss';

const Login = () => {
  return (
    <div className="Login">
      <div className="Login-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
        <form action="" className="form">
          <label for="email">Email address</label>
          <input type="email" id="email" placeholder="myemail@email.com" className="input input-email"/>
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="**********" className="input input-password"/>
          <input type="submit" value="Log in" className="primary-button login-button"/>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  )
}

export { Login };