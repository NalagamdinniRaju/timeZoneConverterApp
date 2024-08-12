import React from 'react';
import moment from 'moment-timezone';
import AnalogClock from './AnalogClock';

function TimeZoneItem({ zone, currentTime, onRemove, provided }) {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="timezone-item"
    >
      <p className="timezone-name">{zone}</p>
      <AnalogClock time={currentTime} timezone={zone} />
      <input
        type="time"
        value={moment(currentTime).tz(zone).format('HH:mm')}
        readOnly
        className="timezone-time"
      />
      <p className="timezone-date">{moment(currentTime).tz(zone).format('MMM D')}</p>
      <button className="remove-timezone" onClick={onRemove}>×</button>
    </div>
  );
}

export default TimeZoneItem;