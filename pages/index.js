import Head from 'next/head'
import styles from '../styles/home.module.scss'
import MovieHome from '../components/movieHome'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Movie Search</title>
      </Head>
      <div className={styles.title}>Search your movies here!</div>
      <MovieHome />
    </div>
  )
}
