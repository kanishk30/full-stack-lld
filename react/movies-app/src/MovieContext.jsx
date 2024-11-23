import React, { createContext, useState, useEffect } from 'react';

export const WatchListContext = createContext();

export default function WatchListContextWrapper({ children }) {
    const [watchList, setWatchList] = useState([]);
    // read from LS for watchlist...

    useEffect(() => {
        const moviesFromLocalStorage = localStorage.getItem('movies');
        if (moviesFromLocalStorage) {
            setWatchList(JSON.parse(moviesFromLocalStorage));
        }
    }, [])

    const addToWatchList = (movieObj) => {
        const updatedWatchList = [...watchList, movieObj];
        setWatchList(updatedWatchList);
        localStorage.setItem("movies", JSON.stringify(updatedWatchList))
    }

    const removeFromWatchList = (movieObj) => {
        // remove a given element from array.
        const filteredMovies = watchList.filter((movie) => movie.id !== movieObj.id);
        setWatchList(filteredMovies);
        localStorage.setItem("movies", JSON.stringify(filteredMovies))
    }

    return <WatchListContext.Provider
        value={{ addToWatchList, removeFromWatchList, watchList, setWatchList }}
    >{children}</WatchListContext.Provider>
}