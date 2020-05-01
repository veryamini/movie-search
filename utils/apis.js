import ConfigData from './config'

var APIS = {
    searchApi: `http://www.omdbapi.com/?apikey=${ConfigData.apiKey}&s=SEARCH`,
    movieApi: `http://www.omdbapi.com/?apikey=${ConfigData.apiKey}&i=imdbID`,
};

export default APIS;