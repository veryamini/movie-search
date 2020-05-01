import ConfigData from './config'

var APIS = {
    searchApi: `https://www.omdbapi.com/?apikey=${ConfigData.apiKey}&s=SEARCH`,
    movieApi: `https://www.omdbapi.com/?apikey=${ConfigData.apiKey}&i=imdbID`,
};

export default APIS;