import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index.js';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

// Import a Google Font for styling
import '../components/css/Signup.css'; // Import the CSS file with custom font and card styles

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError('');
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
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
          Sign up to create an account
        </h2>
        <p className='text-center text-base text-gray-600 mb-6'>
          Already have an account?&nbsp;
          <Link
            to='/login'
            className='font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200'
          >
            Sign In
          </Link>
        </p>
        {error && <p className='text-red-600 text-center mb-4'>{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className='space-y-4'>
            <Input
              label='Full Name: '
              placeholder='Enter your full name'
              className='border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200'
              {...register('name', { required: true })}
            />
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
              {...register('password', { required: true })}
            />
            <Button
              type='submit'
              className='w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition-colors duration-200'
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
