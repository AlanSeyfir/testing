import React, { useState } from 'react';
import './Button.css';

export const Button = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);

  // const options = ['React', 'Vue', 'Angular'];

  let options2 = [
    { name: 'React', id: 1 },
    { name: 'Vue', id: 2 },
    { name: 'Angular', id: 3 },
  ];

  return (
    <div className="dropdown1">
      <div
        className="dropdown-btn1"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width="50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {selected}
      </div>
      {isActive && (
        <div className="dropdown-content1">
          {options2.map((option) => (
            <div
              className="dropdown-item1"
              onClick={() => {
                setSelected(option.name);
                setIsActive(false);
              }}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
