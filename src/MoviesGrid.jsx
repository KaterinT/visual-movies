import { MovieCard } from './MoviesCard';
import movies from "./movies.json";
import styles from "./MoviesGrid.module.css"

export function MoviesGrid (){
    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie)=> (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    )
}