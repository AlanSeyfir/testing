import React from 'react';

const tempStyle = {
  boxSizing: 'border-box',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'baseline',
  padding: '1em',
  marginBottom: '2em',
  backgroundColor: 'rgb(192, 45, 26)',
  color: '#fff',
};

export const Header = () => {
  return (
    <div style={tempStyle}>
      <h1>HEADER</h1>
    </div>
  );
};
