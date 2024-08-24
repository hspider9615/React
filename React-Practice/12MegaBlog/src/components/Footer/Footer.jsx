import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className='relative overflow-hidden py-12 bg-gray-800 text-white border-t-2 border-t-gray-600'>
      <div className='relative z-10 mx-auto max-w-7xl px-4'>
        <div className='flex flex-wrap justify-between'>
          {/* Logo and Copyright */}
          <div className='w-full p-4 md:w-1/2 lg:w-4/12'>
            <div className='flex flex-col justify-between h-full'>
              <div className='mb-6 inline-flex items-center'>
                <Logo width='120px' />
              </div>
              <div>
                <p className='text-sm text-gray-400 text-left'>
                  &copy; {new Date().getFullYear()}. All Rights Reserved by
                  Codex || Spider.
                </p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className='w-full p-6 sm:w-1/2 md:w-1/4 lg:w-2/12'>
            <div>
              <h3 className='mb-6 text-sm font-semibold uppercase text-gray-500 tracking-wide'>
                Company
              </h3>
              <ul>
                <li className='mb-4'>
                  <Link
                    className='text-base font-medium text-gray-300 hover:text-white transition-colors duration-300'
                    to='/'
                  >
                    Features
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    className='text-base font-medium text-gray-300 hover:text-white transition-colors duration-300'
                    to='/'
                  >
                    Pricing
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    className='text-base font-medium text-gray-300 hover:text-white transition-colors duration-300'
                    to='/'
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className='text-base font-medium text-gray-300 hover:text-white transition-colors duration-300'
                    to='/'
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Support Links */}
          <div className='w-full p-6 sm:w-1/2 md:w-1/4 lg:w-2/12'>
            <div>
              <h3 className='mb-6 text-sm font-semibold uppercase text-gray-500 tracking-wide'>
                Support
              </h3>
              <ul>
                <li className='mb-4'>
                  <Link
                    className='text-base font-medium text-gray-300 hover:text-white transition-colors duration-300'
                    to='/'
                  >
                    Account
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    className='text-base font-medium text-gray-300 hover:text-white transition-colors duration-300'
                    to='/'
                  >
                    Help
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    className='text-base font-medium text-gray-300 hover:text-white transition-colors duration-300'
                    to='/'
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className='text-base font-medium text-gray-300 hover:text-white transition-colors duration-300'
                    to='/'
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Legals Links */}
          <div className='w-full p-6 sm:w-1/2 md:w-1/4 lg:w-2/12'>
            <div>
              <h3 className='mb-6 text-sm font-semibold uppercase text-gray-500 tracking-wide'>
                Legals
              </h3>
              <ul>
                <li className='mb-4'>
                  <Link
                    className='text-base font-medium text-gray-300 hover:text-white transition-colors duration-300'
                    to='/'
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    className='text-base font-medium text-gray-300 hover:text-white transition-colors duration-300'
                    to='/'
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className='text-base font-medium text-gray-300 hover:text-white transition-colors duration-300'
                    to='/'
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
