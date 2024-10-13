import React, { useState } from "react";
import "./App.css"; // Import your CSS for styling

const App = () => {
  const [name, setName] = useState("");
  const [showNewCard, setShowNewCard] = useState(false); // State to show the new card

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    if (name) {
      setShowNewCard(true); // Show the new card after name submission
    }
  };

  const handleCloseCard = () => {
    setShowNewCard(false); // Hide the new card when the cross button is clicked
  };

  return (
    <div className="container">
      <video autoPlay muted loop className="video-background">
        <source
          src="https://videos.pexels.com/video-files/5438948/5438948-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="top-right">
        <h1>Communicate to Conquer</h1>
      </div>
      <div className="card">
        <h2>What name do you prefer !</h2>
        <input
          type="text"
          placeholder="Enter your name to start ..."
          value={name}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>→</button>
      </div>

      {/* Conditionally render the new card when the name is submitted */}
      {showNewCard && (
        <div className="new-card">
          <button className="close-button" onClick={handleCloseCard}>×</button>
          <h2>Hello, {name}!</h2>
          <p>Are you ready for the evaluation and improvement?</p>
          <button className="start-button">Start</button>
        </div>
      )}

      <div className="bottom-card">
        <p>This is a text inside the bottom card. Customize this message as needed.</p>
      </div>
    </div>
  );
};

export default App;
