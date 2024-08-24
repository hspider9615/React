import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: '/', authRequired: false },
    { name: 'Login', slug: '/login', authRequired: false, hideWhenAuth: true },
    {
      name: 'Signup',
      slug: '/signup',
      authRequired: false,
      hideWhenAuth: true,
    },
    { name: 'All Posts', slug: '/all-posts', authRequired: true },
    { name: 'Add Post', slug: '/add-post', authRequired: true },
  ];

  return (
    <header className='py-4 shadow bg-gray-800'>
      <Container>
        <nav className='flex items-center justify-between'>
          {/* Logo Section */}
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='100px' />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className='flex items-center space-x-4'>
            {navItems.map((item) => {
              if (
                (item.authRequired && !authStatus) ||
                (item.hideWhenAuth && authStatus)
              )
                return null;
              return (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='px-4 py-2 text-white duration-200 hover:bg-blue-600 rounded-full'
                  >
                    {item.name}
                  </button>
                </li>
              );
            })}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
