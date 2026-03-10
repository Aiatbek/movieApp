export default function MovieDetail({movie, close}){
    return (
        <div className="movie-detail">
            <button className="close-btn" onClick={close}>back</button>
            <h2>{movie.original_title}</h2>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
            <p>Popularity: {movie.popularity} </p>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-poster" />
        </div>
    )
}