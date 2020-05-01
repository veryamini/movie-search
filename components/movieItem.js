import Link from 'next/link'
import styles from '../styles/home.module.scss'

export default function MovieItem(props) {
	return (
		<div className={styles.movieItemWrapper}>
			<Link href="movie/[imdbID]" as={`movie/${props.movie.imdbID}`}>
				<a className={styles.movieName}>
				<div className={styles.movieImg}>
					<img src={props.movie.Poster} alt={props.movie.Title} className={styles.moviePoster}/>
				</div>
				<div className={styles.movieNameDiv}>
					{props.movie.Title}
				</div>
				</a>
						
			</Link>
		</div>
	)
}