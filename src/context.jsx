import { createContext, useEffect, useState, useContext } from "react"

const moviesContext = createContext()

export const useMovieContext = () => {
    return useContext(moviesContext) //custom hook to use context
}

export const MoviesProvider = ({children})=>{
    const [favorites, setFavorites] = useState(() => {
            return localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [];
        });

    useEffect(()=>{
        localStorage.setItem("favorites", JSON.stringify(favorites))
        console.log("saved")
    }, [favorites])

    const addFavorite = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFavorite = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    }

    return <moviesContext.Provider value={value} >{children}</moviesContext.Provider>
}