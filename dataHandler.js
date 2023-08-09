const fs = require('fs');

// Function to handle incoming data
function handleIncomingData(data) {
  try {
    const parsedData = JSON.parse(data);

    // Validate data format
    if (validateDataFormat(parsedData)) {
      return parsedData;
    } else {
      throw new Error('Invalid data format');
    }
  } catch (error) {
    console.error(`Error handling data: ${error}`);
  }
}

// Function to validate data format
function validateDataFormat(data) {
  const requiredKeys = [
    'cve_attack',
    'type_attack',
    'honeypot',
    'protocol',
    'src_ip',
    'dst_ip',
    'src_port',
    'dst_port',
    'src_lat',
    'src_long',
    'dst_lat',
    'dst_long',
    'city',
    'continent',
    'continent_code',
    'country',
    'iso_code',
    'event_count',
    'continents_tracked',
    'countries_tracked',
    'ips_tracked',
    'unknowns',
    'event_time'
  ];

  return requiredKeys.every(key => data.hasOwnProperty(key));
}

module.exports = {
  handleIncomingData
};