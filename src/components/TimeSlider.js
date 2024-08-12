import React from 'react';

function TimeSlider({ value, onChange }) {
  return (
    <div className="time-slider">
      <input
        type="range"
        min="0"
        max="1439"
        value={value}
        onChange={onChange}
        className="slider"
      />
      <span className="slider-time">
        {Math.floor(value / 60).toString().padStart(2, '0')}:
        {(value % 60).toString().padStart(2, '0')}
      </span>
    </div>
  );
}

export default TimeSlider;