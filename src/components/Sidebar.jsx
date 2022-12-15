import React from 'react';
import './Sidebar.css';

const white = {
  color: 'white',
};

export const Sidebar = () => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <p style={white}>Posts</p>
        <p style={white}>Icons</p>
        <p style={white}>Videos</p>
        <p style={white}>Category</p>
      </div>
    </div>
  );
};
