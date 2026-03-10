import "./css/Home.css"
import { useEffect, useState } from 'react'
import MovieCard from "./movieCard.jsx";
import { getPopularMovies, searchMovies} from "./api.js";
import MovieDetail from "./MovieDetail.jsx";

export default function Home(){
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [movies, setMovies] = useState([])
    const [isOn, setIsOn] = useState(null)

    useEffect(()=>{
        (async function() {
            try{
                setLoading(true)
                const moviesData = await getPopularMovies()
                setMovies(moviesData)
            }catch(e){
                console.error("Error fetching popular movies:", e);
                setError("Failed to load popular movies. Please try again later.");
            }finally{
                setLoading(false)
            }
        })()
    }, [])

   console.log(movies)
    const handleSearch = async (e) => {
        e.preventDefault()
        if(search.trim() === "") return
        if(loading) return

        try{
            setLoading(true)
            const moviesData = await searchMovies(search)
            setMovies(moviesData)
        }catch(e){
            console.error("Error searching", e)
            setError("Failed to search movies. Please try again later.")
        }finally{
            setLoading(false)
        }
    }


    const open = (movie) => {
        setIsOn(movie)
    }

    const close = () => {
        setIsOn(null)
    }   




    return (
       <div className="home">
         <form className='search-form' onSubmit={handleSearch}>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className="search-input" />
            <button className="search-button" type="submit">Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading? <div className="loading">Loading...</div> : <div className="movies-grid">
            {isOn? <MovieDetail close={close} movie={isOn}/> : movies.map((movie)=>{
                return  <MovieCard key={movie.id} movie={movie} open={open}/>
            })}
        </div>}
       </div>
    );
}