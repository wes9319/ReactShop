import React, { useRef } from 'react';
import '../styles/Login.scss';

const Login = () => {

  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    }
  }

  return (
    <div className="Login">
      <div className="Login-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
        <form action="/" className="form" ref={form}>
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" placeholder="myemail@email.com" className="input input-email"/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="**********" className="input input-password"/>
          <button 
            type="button" 
            className="primary-button login-button" 
            onClick={handleSubmit}
          >
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">
          Sign up
        </button>
      </div>
    </div>
  )
}

export { Login };