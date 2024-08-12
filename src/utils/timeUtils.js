import moment from 'moment-timezone';

export const getShareableLink = (currentTime, timeZones) => {
  const params = new URLSearchParams({
    time: currentTime.format(),
    zones: timeZones.join(','),
  });
  return `${window.location.origin}?${params.toString()}`;
};

export const scheduleMeet = (currentTime) => {
  const eventDetails = {
    text: 'Scheduled Meeting',
    dates: `${currentTime.format('YYYYMMDDTHHmmss')}/${currentTime.clone().add(2, 'hours').format('YYYYMMDDTHHmmss')}`,
  };
  const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.text)}&dates=${eventDetails.dates}`;
  window.open(url, '_blank');
};