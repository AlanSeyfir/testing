import React, { useState } from 'react';
import './Button.css';

export const Button = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);

  const options = ['React', 'Vue', 'Angular'];

  return (
    <div className="dropdown1">
      <div
        className="dropdown-btn1"
        onClick={(e) => {
          setIsActive(!isActive);
        }}
      >
        {selected}
      </div>

      {isActive && (
        <div className="dropdown-content1">
          {options.map((option) => (
            <div
              className="dropdown-item1"
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
