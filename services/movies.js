import APIS from '../utils/apis'

/**
 * fetches lists of movies based on search string
 * @async
 * @method
 * @param {String} search - search string
 * @returns {Object} props object
 */
export var fetchMovies = async (search) => {
    let url = APIS.searchApi.replace(/SEARCH/g, search);
    let response = await (await fetch(url)).json();
    if (response && response.Search) {
        return response.Search;
    }
    return [];
}