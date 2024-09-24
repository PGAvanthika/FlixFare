// InputSeats.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./InputSeats.css"; // Add CSS for InputSeats if needed

function InputSeats() {
  const [numSeats, setNumSeats] = useState(1);
  const history = useHistory();

  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1 && value <= 7) {
      setNumSeats(value);
    } else {
      alert("Please enter a number between 1 and 7.");
    }
  };

  const handleSubmit = () => {
    history.push(`/screen1/${numSeats}`);
  };

  return (
    <div className="input-seats">
      <h2>Select Number of Seats</h2>
      <label htmlFor="num-seats">Number of Seats:</label>
      <input
        type="number"
        id="num-seats"
        value={numSeats}
        onChange={handleChange}
        min="1"
        max="7"
      />
      <button onClick={handleSubmit}>Proceed to Seat Selection</button>
    </div>
  );
}

export default InputSeats;
