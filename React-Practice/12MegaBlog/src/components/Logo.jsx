import React from 'react';

function Logo({ width = '100px' }) {
  return (
    <div
      style={{
        cursor: 'pointer',
        display: 'inline-block',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img
        src='https://seeklogo.com/images/C/codex-logo-989120AA48-seeklogo.com.png'
        alt='Logo'
        width={width}
        style={{ maxWidth: '100%' }}
      />
    </div>
  );
}

export default Logo;
