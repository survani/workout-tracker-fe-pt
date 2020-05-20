import React, { useState } from 'react';
import { axiosWithAuth } from '../Authentication/axiosWithAuth';
import { Link } from 'react-router-dom';

export default function Register(props) {
  const [user, getUser] = useState({
    email: '',
    username: '',
    password: ''
  });

  const handleChanges = e => {
    getUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('/auth/register', user)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push('/protected');
        console.log('register info form submitted');
      })
      .catch(err => {
        localStorage.removeItem('token');
        console.log('Invalid!!!', err);
      });
  };

  return (
    <div className='form-container'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className='register-form'>
      <input
          type='text'
          placeholder='Email'
          name='email'
          onChange={handleChanges}
          value={user.email}
          className='register-field'
        />
        <input
          type='text'
          placeholder='Username'
          name='username'
          onChange={handleChanges}
          value={user.username}
          className='register-field'
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={handleChanges}
          value={user.password}
          className='register-field'
        />
        <p>
          Already have an account? Sign in <Link to='/login'>here</Link>
        </p>
        <input type='submit' className='button' />
      </form>
    </div>
  );
}
