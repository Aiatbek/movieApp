import './css/movieCard.css'
import { useMovieContext } from "./context.jsx";

export default function MovieCard({movie, open}){

    const { addFavorite, removeFavorite, isFavorite } = useMovieContext()

    const handleFavorite = (e) => {
        e.preventDefault()
        e.stopPropagation()   // ← prevent parent onClick
        
        if (isFavorite(movie.id)) {
            removeFavorite(movie.id)
        } else {
            addFavorite(movie)
        }
    }

    return (
        <div className="movie-card" onClick={() => open(movie)}>
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-poster" onClick={() => open(movie)}/>
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