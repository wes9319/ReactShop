import React from 'react';
import '@styles/SendEmail.scss';
import logo from '@logos/logo_yard_sale.svg';
import iconMail from '@icons/email.svg';

const SendEmail = () => {
  return (
    <div className="SendEmail">
    <div className="SendEmail-container">
      <img src={logo} alt="logo" className="logo"/>
      <h1 className="title">
        Email has been sent!
      </h1>
      <p className="subtitle">
        Please check your inbox for instructions on how to reset your password
      </p>
      <div className="email-image">
        <img src={iconMail} alt="email"/>
      </div>
      <button className="primary-button login-button">
        Login
      </button>
      <p className="resend">
        <span>Didn't receive the email?</span>
        <a href="/">Resend</a>
      </p>
    </div>
  </div>
  )
}

export { SendEmail };