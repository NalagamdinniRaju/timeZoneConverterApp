import React, { useState } from 'react';
import moment from 'moment-timezone';

function AddTimeZone({ onAddTimeZone, isDarkMode }) {
  const [selectedTimeZone, setSelectedTimeZone] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSelectedTimeZone(input);
    const filteredZones = moment.tz.names().filter(zone =>
      zone.toLowerCase().includes(input.toLowerCase())
    );
    setSuggestions(filteredZones);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTimeZone) {
      onAddTimeZone(selectedTimeZone);
      setSelectedTimeZone('');
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (zone) => {
    setSelectedTimeZone(zone);
    setSuggestions([]);
  };

  return (
    <div className={`add-timezone-container`}>
      <form onSubmit={handleSubmit} className="add-timezone-form">
        <input
          type="text"
          value={selectedTimeZone}
          onChange={handleInputChange}
          placeholder="Search and add timezone"
          className="timezone-input"
        />
        <button type="submit" className="add-timezone-button">Add</button>
      </form>
      {suggestions.length > 0 && (
        <ul className={`suggestions-list  ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
          {suggestions.map(zone => (
            <li
              key={zone}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(zone)}
            >
              {zone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AddTimeZone;
