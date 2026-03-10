import "./css/App.css"
import Favorites from "./Favorites.jsx"
import Home from "./Home.jsx"
import {Route, Routes} from "react-router-dom"
import Navbar from "./Navbar.jsx"
import { MoviesProvider } from "./context.jsx"

function App() {


  return (
    <>
    <MoviesProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/favorites" element={<Favorites/>}></Route>
          </Routes>
    </MoviesProvider>
    </>
  )
}

export default App
