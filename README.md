
New Concepts Learned:
1. Contexts
2. Router

the most interesting and hard to think of(design, architecture) was saving favorites on the seperate page, which had its own "favorites" state seperate from "movies"state which we initially filled with data from API. And that each MovieCard had all these functions related to "favorites" state imported from the Context.jsx instead of props drilling. 

So basically when clicked on fav-btn it was just adding or removing our specific movie using its id to the "favorites" states' list. 

Also to display active(red) heart not only in favorites list but also on movies list we used isFavorite method which checked whether we have this movie in "favorites" list.

-async functions always return promises

-->CONTEXT FILE IS THE MOST IMPORTANT ONE

-- small tricks learned: 
->You can use this kind of conditional rendering to filter result directly inside map
<div className="movies-grid">
  {movies.map(
    (movie) =>
      movie.title.toLowerCase().startsWith(searchQuery) && (
        <MovieCard movie={movie} key={movie.id} />
      )
  )}
</div>

->we can do optional chaining to prevent an error if sth is null or undefined. 
<p>{movie.release_date?.split("-")[0]}</p>



At the end, the app is complete:

popular movies load from the API
search works
favorites work
favorites page works
favorites stay saved with localStorage
navigation works with React Router


Major points:


10. Conditional rendering

loading message
error message
filtered search results
active favorite button

11. React Router basics

BrowserRouter
Routes
Route
Link

12. Separating pages and components

components/ for reusable UI parts
pages/ for full pages
services/ for API logic
context/ for global state
css/ for styling

15. useEffect

loading movies when the component mounts
saving favorites to localStorage
an empty dependency array [] means “run once on first mount.”

16. Loading and error states, good real-world practice:

show loading while waiting for data
show error if request fails

17. Local storage

 persist data in the browser so favorites do not disappear after refresh.

19. React Context

 share state across multiple components without prop drilling.

20. Custom hook pattern

 pattern of creating a custom hook like:
useMovieContext()
so components can easily access shared context data.

21. Toggling favorites

add/remove items from array state correctly using updater functions:
setFavorites(prev => [...prev, movie])
and remove with filter().

22. .some() for checking existence
You learned how .some() can check whether a movie is already in favorites.