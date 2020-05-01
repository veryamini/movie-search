import styles from '../styles/home.module.scss'
import MovieItem from './movieItem'

export default function MovieList(props) {
	return (
		<div className={styles.movieList}>
			{
                props.isLoading ? (
                    <div className={styles.loading}>
                        Please wait, loading...
                    </div>
                ) : props.movieList && props.movieList.length ? (
                        props.movieList.map((movie, key) => {
                            return <MovieItem movie={movie} key={key}/>
                        })
                ) : !props.searchClicked ? (null) : (
                    <div className={styles.notFound}>
                        No movies found!
                    </div>
                )
            }
		</div>
	)
}