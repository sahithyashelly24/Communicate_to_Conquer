import React from 'react';
import './App.css'; // Use the same CSS file or create a new one for profession page styles

const ProfessionPage = () => {
  return (
    <div className="profession-page">
      <h1>Select Your Profession</h1>
      <select>
        <option value="student">Student</option>
        <option value="working">Working Professional</option>
        <option value="psychiatrist">Psychiatrist</option>
        <option value="general">General User</option>
      </select>
    </div>
  );
};

export default ProfessionPage;
