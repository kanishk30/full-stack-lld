import { useState, useEffect, useContext } from "react"
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
import axios from 'axios';
import { WatchListContext } from "../MovieContext";
import { useSelector, useDispatch } from 'react-redux';
import { handleNext, handlePrev } from '../redux/paginationSlice'

import { fetchMovieMiddleware } from '../redux/middleware/fetchMovieMiddleware'


function Movies() {
    const dispatch = useDispatch()
    // const [movies, setMovies] = useState([]);

    const { loading, error, movies } = useSelector((state) => state.movies);

    const pageNo = useSelector((state) => state.pagination.pageNo)
    // const [watchList, setWatchList] = useState([]);

    const { addToWatchList, removeFromWatchList, watchList, setWatchList } = useContext(WatchListContext);

    useEffect(() => {
        dispatch(fetchMovieMiddleware())
    }, [pageNo])


    // useEffect(() => {
    //     axios.get('https://api.themoviedb.org/3/trending/movie/day', {
    //         params: {
    //             api_key: 'e278e3c498ab14e0469bf6d86da17045',
    //             language: 'en-US',
    //             page: pageNo
    //         }
    //     }).then((response) => {
    //         console.log(response.data.results)
    //         setMovies(response.data.results)
    //     })
    //         .catch(e => console.log(e))
    // }, [pageNo])

    // read from LS for watchlist...

    // useEffect(() => {
    //     const moviesFromLocalStorage = localStorage.getItem('movies');
    //     if (moviesFromLocalStorage) {
    //         setWatchList(JSON.parse(moviesFromLocalStorage));
    //     }
    // }, [])



    // const addToWatchList = (movieObj) => {
    //     const updatedWatchList = [...watchList, movieObj];
    //     setWatchList(updatedWatchList);
    //     localStorage.setItem("movies", JSON.stringify(updatedWatchList))
    // }

    // const removeFromWatchList = (movieObj) => {
    //     // remove a given element from array.
    //     const filteredMovies = watchList.filter((movie) => movie.id !== movieObj.id);
    //     setWatchList(filteredMovies);
    //     localStorage.setItem("movies", JSON.stringify(filteredMovies))
    // }

    if (loading) {
        return <h3>loading...</h3>
    }

    if (error) {
        return <h3>error...</h3>
    }

    return (
        <div>
            <div className="text-2xl font-bold text-center">
                <h2>Trending movies</h2>
            </div>
            <div className="flex justify-evenly flex-wrap gap-8">
                {movies.map((movieObj) => <MovieCard
                    movieObj={movieObj}
                    addToWatchList={addToWatchList}
                    watchList={watchList}
                    removeFromWatchList={removeFromWatchList}
                />)}
            </div>

            <Pagination
                pageNumber={pageNo}
                handlePrevFn={() => dispatch(handlePrev())}
                handleNextFn={() => dispatch(handleNext())}
            />

        </div>
    )

}

export default Movies