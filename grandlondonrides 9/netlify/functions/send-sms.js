exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method not allowed' };
  
  const booking = JSON.parse(event.body);
  const msg = '🚗 NEW BOOKING - Grand London Rides | Name: ' + booking.name + ' | Phone: ' + booking.phone + ' | Pickup: ' + booking.pickup + ' | Drop-off: ' + booking.dropoff + ' | When: ' + booking.when + ' | Fare: ' + booking.fare;

  const params = new URLSearchParams({ text: msg, phones: '+447438310232' });

  const response = await fetch('https://rest.textmagic.com/api/v2/messages', {
    method: 'POST',
    headers: {
      'X-TM-Username': 'akbarraza',
      'X-TM-Key': 'QsaR1qPT1u60CRLZLmgdNMZKpeBPOG',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params
  });

  const data = await response.json();
  return { statusCode: 200, body: JSON.stringify(data) };
};
