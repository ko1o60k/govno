// OtherPage.js

import React, { useState } from 'react';
import MainMenuButton from './MainMenuButton';


const OtherPage = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Other Page</h2>
      {/* Your other page content */}
      <MainMenuButton />
      <p>Select an option:</p>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};

export default OtherPage;
