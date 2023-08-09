// utils.js

function validateData(data) {
  const schema = {
    "cve_attack": "string",
    "type_attack": "string",
    "honeypot": "string",
    "protocol": "string",
    "src_ip": "string",
    "dst_ip": "string",
    "src_port": "number",
    "dst_port": "number",
    "src_lat": "number",
    "src_long": "number",
    "dst_lat": "number",
    "dst_long": "number",
    "city": "string",
    "continent": "string",
    "continent_code": "string",
    "country": "string",
    "iso_code": "string",
    "event_count": "number",
    "continents_tracked": "number",
    "countries_tracked": "number",
    "ips_tracked": "number",
    "unknowns": "number",
    "event_time": "string"
  };

  for (let key in schema) {
    if (typeof data[key] !== schema[key]) {
      return false;
    }
  }
  return true;
}

module.exports = {
  validateData
};