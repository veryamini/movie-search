import Link from 'next/link'
import fetch from 'node-fetch'
import styles from '../../styles/home.module.scss'
import APIS from '../../utils/apis'


/**
 * Renders Movie details, dynamic route based on imdbID
 * @param {Object} movie
 * @returns {Node} MovieDetail
 */
const MovieDetail = ({movie})  => {
    return (
        <div className={styles.movieDetailWrapper}>
          <div className={styles.movieHeader}>
            <div className={styles.movieTitle}>{movie.Title}</div>
            <div className={styles.detailsWrapper}>
              <div className={styles.data}>{movie.Rated}</div>
              <div className={styles.data}>{movie.Runtime}</div>
              <div className={styles.data}>{movie.Genre}</div>
              <div className={styles.data}>{movie.Released}</div>
            </div>
          </div>
          <div className={styles.movieImage}>
            <img src={movie.Poster} alt={movie.Title} className={styles.poster}/>
          </div>
          <div className={styles.plot}>{movie.Plot}</div>
          <div className={styles.directionDetails}>
            <div className={styles.pairedData}>
              <div className={styles.header}>Director: </div>
              <div className={styles.value}>{movie.Director}</div>
            </div>
            <div className={styles.pairedData}>
              <div className={styles.header}>Cast: </div>
              <div className={styles.value}>{movie.Actors}</div>
            </div>
            <div className={styles.pairedData}>
              <div className={styles.header}>Writer: </div>
              <div className={styles.value}>{movie.Writer}</div>
            </div>
            <div className={styles.pairedData}>
              <div className={styles.header}>Production: </div>
              <div className={styles.value}>{movie.Production}</div>
            </div>
            <div className={styles.pairedData}>
              <div className={styles.header}>BoxOffice Earnings: </div>
              <div className={styles.value}>{movie.BoxOffice}</div>
            </div>
            <div className={styles.pairedData}>
              <div className={styles.header}>Language: </div>
              <div className={styles.value}>{movie.Language}</div>
            </div>
            <div className={styles.pairedData}>
              <div className={styles.header}>Type: </div>
              <div className={styles.value}>{movie.Type}</div>
            </div>
          </div>
          <div className={styles.ratings}>
            <div className={styles.ratingsHeader}>Ratings: </div>
            {movie.Ratings && movie.Ratings.map((rating, key) => {
              return (
                <div className={styles.pairedData} key={key}>
                  <div className={styles.header}>{rating.Source}:</div>
                  <div className={styles.value}>{rating.Value}</div>
                </div>
              )
            })}
            <div className={styles.pairedData}>
              <div className={styles.header}>Imdb: </div>
              <div className={styles.value}>{movie.imdbRating}</div>
            </div>
            <div className={styles.pairedData}>
              <div className={styles.header}>Imdb Votes: </div>
              <div className={styles.value}>{movie.imdbVotes}</div>
            </div>
          </div>
        <Link href="/"><a className={styles.goHome}>Go to Home</a></Link>
        </div>
    )
}

export default MovieDetail

/**
 * fetches initial props during build, and runs on client side to render movie
 * props
 * @async
 * @method
 * @param {Object} query - url query
 * @returns {Object} props object
 */
MovieDetail.getInitialProps =  async function ({query}) {
  const {imdbID} = query;
  const data = await fetch(APIS.movieApi.replace(/imdbID/g, imdbID));
  const movie = await data.json();
  return {
    movie,
  }
}