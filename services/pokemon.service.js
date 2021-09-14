const { fetch } = require('../utils');

const groupVersions = versions => versions.reduce((acc, version) => {
  acc.push(...version);
  return acc;
}, []);

const getGenerationByName = (name) =>
  fetch.get(`generation/${name}`)
    .then((response => {
      if (!response.status) {
        throw new Error('An error ocurred while executing the request');
      }

      return response.data;
    }));

const getVersionGroupByName = (name) =>
  fetch.get(`version-group/${name}`)
    .then((response => {
      if (!response.status) {
        throw new Error('An error ocurred while executing the request');
      }

      return response.data;
    }));

const getGenerationsService = () =>
  fetch.get('/generation')
    .then(response => {
      if (!response.status) {
        throw new Error('An error ocurred while executing the request');
      }

      return response.data
    });

const getFullGenerations = () =>
  getGenerationsService()
    .then(generations => generations.results.map(({ name }) => getGenerationByName(name)))
    .then(responses => Promise.all(responses))
    .then(generations => generations.map(({
      version_groups,
      name,
      main_region,
      id
    }) =>
      Promise.all(version_groups.map(({ name: version_name }) =>
        getVersionGroupByName(version_name)
          .then(({ versions }) => versions)
      ))
        .then(groupVersions)
        .then(games => ({
          id,
          name,
          main_region,
          games,
        }))
    ))
    .then(result => Promise.all(result))

module.exports = {
  getFullGenerations,
}