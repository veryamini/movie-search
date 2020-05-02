import React, {Component} from 'react'
import styles from '../styles/home.module.scss'
import {fetchMovies} from '../services/movies'
import MovieList from './movieList'


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
			maxPage: 0,
			currPage: 0,
			isLoading: false,
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
			isLoading: true,
		});
		fetchMovies(search).then((response) => {
			let {moviesList, totalResults} = response;
			this.setState({
				moviesList,
				maxPage : totalResults % 10 === 0 ?  totalResults/10 : totalResults/10 + 1,
				currPage : 1,
				isLoading: false,
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
	 * handleChangePage handles changing page and fetching new data
	 * @param {Number} index change in value of page to be fetched
	 * @returns Function
	 */
	handleChangePage = (index) => {
		const {search, currPage} = this.state;
		fetchMovies(search, currPage+index).then((response) => {
			let {moviesList} = response;
			this.setState({
				moviesList,
				currPage : this.state.currPage +index,
			});
		});
	}

	/**
	 * renders the component
	 * @returns {Element}
	 */
	render () {
		const {search, searchClicked, moviesList, maxPage, currPage, isLoading} = this.state;
		const btnProps = search && search.trim() && search.trim().length > 2 ? undefined : {disabled: true};
		const nextBtnProps = maxPage === currPage ? {disabled: true} : undefined;
		const prevBtnProps = currPage === 1 ? {disabled: true} : undefined;
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
					<MovieList searchClicked={searchClicked} isLoading={isLoading} movieList={moviesList}/>
				</div>
				{
					maxPage ? (
						<div className={styles.pageChangeDiv}>
							<button
								onClick={() => this.handleChangePage(-1)}
								{...prevBtnProps}
								className={`${styles.pageBtn} ${prevBtnProps ? null : styles.active}`}
							>
								Prev
							</button>
							<button
								onClick={() => this.handleChangePage(1)}
								{...nextBtnProps}
								className={`${styles.pageBtn} ${nextBtnProps ? null : styles.active}`}
							>
								Next
							</button>
						</div>
					) : (null)
				}
			</div>
		)
	}
}