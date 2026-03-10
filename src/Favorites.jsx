import "./css/Favorites.css"
import MovieCard from "./movieCard.jsx";
import { useMovieContext } from "./context.jsx";


export default function Favorites(){

    const { favorites } = useMovieContext()

    return (
        <div className="favorites">
            <h2>Your Favorite Movies</h2>
            {<div className="movies-grid">
                {favorites.map((movie)=>{
                    return <MovieCard key={movie.id} movie={movie}/>
                })}
            </div>}
        </div>
    )
}