import APIS from '../utils/apis'


/**
 * fetches lists of movies based on search string and page number
 * @async
 * @method
 * @param {String} search - search string
 * @returns {Object} props object
 */
export var fetchMovies = async (search, page=1) => {
    let url = APIS.searchApi.replace(/SEARCH/g, search);
    url += page ? '&page=' + page : '';
    let response = await (await fetch(url)).json();
    if (response && response.Search) {
        return {
            moviesList: response.Search,
            totalResults: parseInt(response.totalResults),
        };
    }
    return {
        moviesList: [],
        totalResults: 0,
    };
}