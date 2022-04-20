import React from 'react';

const MyAccount = () => {
  return (
    <div class="MyAccount">
      <div class="MyAccount-container">
        <h1 class="title">My account</h1>
        <form action="" class="form">
          <div>
            <label for="name">Name</label>
            <p class="value">My name</p>
            <label for="email">Email</label>
            <p class="value">Myemail@email.com</p>          
            <label for="password">Password</label>
            <p class="value">******************</p>        
          </div>
          <input type="submit" value="Edit" class="secondary-button login-button"/>
        </form>
      </div>
    </div>
  )
}

export { MyAccount };