import React from 'react'
import "./LoginPage.css";
export const LoginPage = () => {
  return (
<div  className='login_page'>
    <div className='container'>
        <div className='login_content'>
             <h1>Login</h1>
                  <form>
                    <input type='email' placeholder='Enter your email' />
                     <input type='password' placeholder='Enter Your password' />
                     <button type='submit'>Login</button>
                     <p>Don't have an Account <span>Sign in</span></p>
                  </form>

        </div>
    </div>
</div>
  )
}
