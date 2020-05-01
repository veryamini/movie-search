import APIS from '../utils/apis'

export var fetchMovies = async (search) => {
    let url = APIS.searchApi.replace(/SEARCH/g, search);
    let response = await (await fetch(url)).json();
    if (response && response.Search) {
        return response.Search;
    }
    return [];
}