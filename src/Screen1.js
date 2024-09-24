import React, { useState } from "react";
import "./Screen1.css";

function Screen1() {
  const [seats, setSeats] = useState(initialSeats);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [maxSelectable, setMaxSelectable] = useState(3); // Default max selectable seats

  // Handle seat selection
  const handleSelect = (id) => {
    if (selectedSeats.length >= maxSelectable && !selectedSeats.includes(id))
      return;

    const newSeats = { ...seats };
    Object.keys(newSeats).forEach((row) => {
      newSeats[row] = newSeats[row].map((seat) =>
        seat.id === id
          ? {
              ...seat,
              status: seat.status === "available" ? "selected" : seat.status,
            }
          : seat
      );
    });

    const isSelected = newSeats[Object.keys(newSeats)[0]].find(
      (seat) => seat.id === id && seat.status === "selected"
    );

    setSeats(newSeats);

    if (isSelected) {
      setSelectedSeats([...selectedSeats, id]);
    } else {
      setSelectedSeats(selectedSeats.filter((seatId) => seatId !== id));
    }
  };

  // Handle change in maximum selectable seats
  const handleMaxSelectableChange = (e) => {
    const value = Number(e.target.value);
    if (value > 0 && value <= 7) {
      setMaxSelectable(value);
    } else {
      e.target.value = maxSelectable;
    }
  };

  return (
    <div className="seating-chart">
      <div className="controls">
        <label htmlFor="max-selectable">Max Seats Selectable: </label>
        <input
          type="number"
          id="max-selectable"
          value={maxSelectable}
          onChange={handleMaxSelectableChange}
          min="1"
          max="7"
        />
      </div>
      <div className="seating-rows">
        {Object.keys(seats).map((row, index) => (
          <div key={row} className="seat-row">
            {row === "A" && (
              <div className="row-pricing platinum">
                Platinum - Rs: 175
              </div>
            )}

            {row === "E" && (
              <div className="row-pricing gold">Gold - Rs: 150</div>
            )}
            {row === "F" && (
              <div className="row-pricing silver">Silver - Rs: 120</div>
            )}
            <div className="row-label">{row}</div>
            {seats[row].map((seat) => (
              <button
                key={seat.id}
                className={`seat ${seat.status}`}
                onClick={() => handleSelect(seat.id)}
                disabled={seat.status === "booked"}
              >
                {seat.number}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const initialSeats = {
  A: [
    { id: "A1", number: 1, status: "booked" },
    { id: "A2", number: 2, status: "available" },
    { id: "A3", number: 3, status: "booked" },
    { id: "A4", number: 4, status: "booked" },
    { id: "A5", number: 5, status: "booked" },
    { id: "A6", number: 6, status: "booked" },
    { id: "A7", number: 7, status: "available" },
    { id: "A9", number: 8, status: "available" },
    { id: "A8", number: 9, status: "available" },

    // Add more seats here
  ],
  B: [
    { id: "B1", number: 1, status: "booked" },
    { id: "B2", number: 2, status: "booked" },
    { id: "B3", number: 3, status: "booked" },
    { id: "B4", number: 4, status: "booked" },
    { id: "B5", number: 5, status: "booked" },
    { id: "B6", number: 6, status: "booked" },
    { id: "B7", number: 6, status: "booked" },
    { id: "B8", number: 8, status: "available" },
    { id: "B9", number: 9, status: "available" },
    // Add more seats here
  ],
  C: [
    { id: "C1", number: 16, status: "booked" },
    { id: "C2", number: 15, status: "booked" },
    { id: "C3", number: 14, status: "booked" },
    { id: "C4", number: 13, status: "available" },
    { id: "C5", number: 12, status: "available" },
    { id: "C6", number: 11, status: "available" },
    { id: "C7", number: 10, status: "available" },
    { id: "C8", number: 9, status: "available" },
    { id: "C9", number: 8, status: "available" },
    // Add more seats here
  ],
  D: [
    { id: "D1", number: 16, status: "available" },
    { id: "D2", number: 15, status: "available" },
    { id: "D3", number: 14, status: "booked" },
    { id: "D4", number: 13, status: "booked" },
    { id: "D5", number: 12, status: "booked" },
    { id: "D6", number: 11, status: "available" },
    { id: "D7", number: 10, status: "available" },
    { id: "D8", number: 9, status: "available" },
    { id: "D9", number: 8, status: "available" },
    // Add more seats here
  ],
  E: [
    { id: "E1", number: 16, status: "available" },
    { id: "E2", number: 15, status: "booked" },
    { id: "E3", number: 14, status: "available" },
    { id: "E4", number: 13, status: "available" },
    { id: "E5", number: 12, status: "available" },
    { id: "E6", number: 11, status: "booked" },
    { id: "E7", number: 10, status: "booked" },
    { id: "E8", number: 9, status: "booked" },
    { id: "E9", number: 8, status: "booked" },
    // Add more seats here
  ],
  F: [
    { id: "F1", number: 17, status: "booked" },
    { id: "F2", number: 16, status: "available" },
    { id: "F3", number: 17, status: "booked" },
    { id: "F4", number: 17, status: "booked" },
    { id: "F5", number: 17, status: "available" },
    { id: "F6", number: 17, status: "booked" },
    { id: "F7", number: 17, status: "booked" },
    { id: "F8", number: 17, status: "booked" },

    // Add more seats here
  ],
  G: [
    { id: "G1", number: 17, status: "booked" },
    { id: "G2", number: 16, status: "booked" },
    { id: "G3", number: 17, status: "booked" },
    { id: "G4", number: 17, status: "available" },
    { id: "G5", number: 17, status: "booked" },
    { id: "G6", number: 17, status: "booked" },
    { id: "G7", number: 17, status: "booked" },
    { id: "G8", number: 17, status: "available" },

    // Add more seats here
  ],
  H: [
    { id: "H1", number: 17, status: "booked" },
    { id: "H2", number: 16, status: "available" },
    { id: "H3", number: 17, status: "booked" },
    { id: "H4", number: 17, status: "booked" },
    { id: "H5", number: 17, status: "booked" },
    { id: "H6", number: 17, status: "booked" },
    { id: "H7", number: 17, status: "booked" },
    { id: "H8", number: 17, status: "booked" },

    // Add more seats here
  ],
  I: [
    { id: "I1", number: 17, status: "booked" },
    { id: "I2", number: 16, status: "booked" },
    { id: "I3", number: 17, status: "booked" },
    { id: "I4", number: 17, status: "booked" },
    { id: "I5", number: 17, status: "booked" },
    { id: "I6", number: 17, status: "booked" },
    { id: "I7", number: 17, status: "booked" },
    { id: "I8", number: 17, status: "booked" },

    // Add more seats here
  ],
  J: [
    { id: "J1", number: 17, status: "booked" },
    { id: "J2", number: 16, status: "available" },
    { id: "J3", number: 17, status: "booked" },
    { id: "J4", number: 17, status: "booked" },
    { id: "J5", number: 17, status: "booked" },
    { id: "J6", number: 17, status: "booked" },
    { id: "J7", number: 17, status: "available" },
    { id: "J8", number: 17, status: "booked" },

    // Add more seats here
  ],
};

export default Screen1;
