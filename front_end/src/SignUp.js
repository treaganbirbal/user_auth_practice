import React from 'react';

const SignUp = () => {
    return (
        <>
            Sign-Up
            First Name: <input type="text" className='first-name' value='' placeholder='enter first name'/>
            Last Name: <input type="text" className='last-name' value='' placeholder='enter last name'/>
            Email: <input type="email" className='email' value='' placeholder='email'/>
            Password: <input type="password" className='password' value='' placeholder='password'/>
        </>
    )
}

export default SignUp;