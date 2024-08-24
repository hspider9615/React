import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';

// Import the CSS file for consistent styling
import '../components/css/Signup.css'; // Ensure the same styling is applied

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');

  const login = async (data) => {
    setError('');
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='flex items-center justify-center p-4'>
      <div className='w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-gray-300'>
        <div className='mb-4 flex justify-center'>
          <span className='inline-block w-24'>
            <Logo width='100%' />
          </span>
        </div>
        <h2 className='text-center text-2xl font-semibold text-gray-800 mb-4'>
          Sign in to your account
        </h2>
        <p className='text-center text-base text-gray-600 mb-6'>
          Don't have an account?&nbsp;
          <Link
            to='/signup'
            className='font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200'
          >
            Sign Up
          </Link>
        </p>
        {error && <p className='text-red-600 text-center mb-4'>{error}</p>}
        <form onSubmit={handleSubmit(login)}>
          <div className='space-y-4'>
            <Input
              label='Email: '
              placeholder='Enter your email'
              type='email'
              className='border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200'
              {...register('email', {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    'Email address must be a valid address',
                },
              })}
            />
            <Input
              label='Password: '
              type='password'
              placeholder='Enter your password'
              className='border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200'
              {...register('password', {
                required: true,
              })}
            />
            <Button
              type='submit'
              className='w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition-colors duration-200'
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
