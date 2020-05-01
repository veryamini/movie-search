var APIS = {
    searchApi: `https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=SEARCH`,
    movieApi: `https://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=imdbID`,
};

export default APIS;