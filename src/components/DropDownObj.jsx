import React, { useState } from 'react';

export const DropDownObj = () => {
  let fruits = [
    { label: 'Apple', value: '🍎' },
    { label: 'Banana', value: '🍌' },
    { label: 'Orange', value: '🍊' },
  ];

  const [fruit, setFruit] = useState('Select a fruit');

  const handleFruitChange = (e) => {
    setFruit(e.target.value);
  };

  return (
    <div>
      {fruit}
      <p>---</p>
      <select onChange={handleFruitChange}>
        <option value="Select a fruit">-- Select a fruit --</option>
        {fruits.map((fruit) => (
          <option key={fruit.label} value={fruit.value}>
            {fruit.label}
          </option>
        ))}
      </select>
    </div>
  );
};
