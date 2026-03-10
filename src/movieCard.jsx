import './css/movieCard.css'
import { useMovieContext } from "./context.jsx";

export default function MovieCard({movie}){

    const { addFavorite, removeFavorite, isFavorite } = useMovieContext()

    const handleFavorite = (e) => {
        e.preventDefault()
        
        if (isFavorite(movie.id)) {
            removeFavorite(movie.id)
        } else {
            addFavorite(movie)
        }
    }

    return (
        <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-poster" />
            <div className="movie-overlay">
                <button onClick={handleFavorite} className={`favorite-btn${isFavorite(movie.id) ? ' active' : ''}`}>♥</button>
            </div>
        </div>
        <div className="movie-info">
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-year">{movie.release_date}</p>
        </div>

    </div>
    )
}