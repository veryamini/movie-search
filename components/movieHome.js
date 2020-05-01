import React, {Component} from 'react'
import styles from '../styles/home.module.scss'
import {fetchMovies} from '../services/movies'
import MovieList from './movieList'
import CommonFunc from '../utils/commonFunc'


/**
 * Renders MovieHome page
 */
export default class MovieHome extends Component {
	/**
	 * Initializes props and state
	 * @constructor
	 * @param {Object} props 
	 */
	constructor(props) {
		super(props)
		this.state = {
			search : '',
			moviesList: undefined,
			searchClicked: false,
		};
	}

	/**
	 * handles btn click event on search and fetches movies list
	 */
	handleSearch = () => {
		const {search} = this.state;
		this.setState({
			searchClicked: true,
			moviesList: undefined,
		});
		fetchMovies(search).then((moviesList) => {
			this.setState({
				moviesList,
			});
		});
	}

	/**
	 * handles onChange event on input
	 * @param {Object} e event 
	 */
	handleChange = (e) => {
		let search = e.target.value;
		this.setState({
			search,
		});
	}

	/**
	 * renders the component
	 * @returns {Element}
	 */
	render () {
		const {search, searchClicked, moviesList} = this.state;
		const btnProps = search && search.trim() && search.trim().length > 2 ? undefined : {disabled: true};
		return (
			<div className={styles.movieHomeWrapper}>
				<div className={styles.searchPanel}>
					<input
						type="text"
						onChange={this.handleChange}
						value={search || ''}
						className={styles.searchInput}
						placeholder="Search Movies.."
					/>
					<button
						className={`${styles.searchBtn} ${btnProps ? null : styles.active}`}
						onClick={this.handleSearch}
						{...btnProps}
					>
						Search
					</button>
				</div>
				<div className={styles.movieListWrapper}>
					<MovieList searchClicked={searchClicked} isLoading={searchClicked && CommonFunc.isUndefined(moviesList)} movieList={moviesList}/>
				</div>
			</div>
		)
	}
}