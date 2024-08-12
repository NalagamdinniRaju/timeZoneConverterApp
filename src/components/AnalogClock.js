import React, { useEffect, useRef } from 'react';
import moment from 'moment-timezone';

function AnalogClock({ time, timezone }) {
  const hourRef = useRef(null);
  const minRef = useRef(null);
  const secRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      const date = moment(time).tz(timezone);
      const hours = date.hours();
      const minutes = date.minutes();
      const seconds = date.seconds();

      const hourRotation = 30 * hours + minutes / 2;
      const minRotation = 6 * minutes;
      const secRotation = 6 * seconds;

      hourRef.current.style.transform = `rotate(${hourRotation}deg)`;
      minRef.current.style.transform = `rotate(${minRotation}deg)`;
      secRef.current.style.transform = `rotate(${secRotation}deg)`;
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, [time, timezone]);

  return (
    <div className="clock">
      <div ref={hourRef} className="hand hour-hand"><i></i></div>
      <div ref={minRef} className="hand min-hand"><i></i></div>
      <div ref={secRef} className="hand sec-hand"><i></i></div>
      {[...Array(12)].map((_, i) => (
        <span key={i} style={{ '--i': i + 1 }}><b>{i + 1}</b></span>
      ))}
    </div>
  );
}

export default AnalogClock;