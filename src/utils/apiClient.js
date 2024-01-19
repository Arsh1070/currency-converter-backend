const axios = require('axios');
const config = require('../config/config');

// Create an Axios instance with default configuration
const apiClient = axios.create({
  baseURL: config.base_url || 'https://api.coingecko.com/api/v3', // Replace with your API base URL
  // timeout: 5000, // Set a timeout for API requests
  /*  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers here
  }, */
});

module.exports = apiClient;
