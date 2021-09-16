const { fetch } = require('../utils');
const { ServerInternalError } = require('../errors');

const getGenerationsService = () =>
  fetch.get('/generation')
    .then(response => {
      if (!response.status) {
        throw new ServerInternalError('An error ocurred while executing the request');
      }

      return response.data
    });

const getGenerationByName = (name) =>
  fetch.get(`generation/${name}`)
    .then((response => {
      if (!response.status) {
        throw new ServerInternalError('An error ocurred while executing the request');
      }

      return response.data;
    }));

const getVersionGroupByName = (name) =>
  fetch.get(`version-group/${name}`)
    .then((response => {
      if (!response.status) {
        throw new ServerInternalError('An error ocurred while executing the request');
      }

      return response.data;
    }));

const getFullGenerations = () =>
  getGenerationsService()
    .then(generations => generations.results.map(({ name }) =>
      getGenerationByName(name).then(({ version_groups, main_region, id }) =>
        Promise.all(version_groups.map(({ name: version_name }) =>
          getVersionGroupByName(version_name)
            .then(({ versions }) => versions.flat())
        ))
          .then(games => ({
            id,
            name,
            main_region,
            games,
          }))
      ))
    )
    .then(result => Promise.all(result))

const getFullGenerationsAsync = async () => {
    const { results: allGenerations } = await getGenerationsService();
    const generationsWithGames = allGenerations.map(async ({ name }) => {
      const { version_groups, main_region, id } = await getGenerationByName(name);
      const gamesArray = version_groups.map(({ name: version_name }) => getVersionGroupByName(version_name));
      const games = await Promise.all(gamesArray);

      return {
        id,
        name,
        main_region,
        games,
      }
    });

    return Promise.all(generationsWithGames);
}

module.exports = {
  getFullGenerations: getFullGenerationsAsync,
  // getFullGenerations
}