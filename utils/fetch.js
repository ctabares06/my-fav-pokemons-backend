const axios = require('axios').default;

const fetch = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 10000,
});

module.exports = fetch;