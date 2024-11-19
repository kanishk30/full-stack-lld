import { useState, useEffect } from "react";
import { GENRE_IDS_MAP } from '../constants';

function WatchList() {
    const [watchListArr, setWatchListArr] = useState([]);
    const [search, setSearch] = useState('')
    const [genreList, setGenreList] = useState(['All Genres', 'Action', 'Sci-Fi', 'Thriller']);
    const [currentGenre, setCurrentGenre] = useState('All Genres')

    useEffect(() => {
        const moviesFromLS = localStorage.getItem('movies');
        if (!moviesFromLS) return;

        setWatchListArr(JSON.parse(moviesFromLS))
    }, [])

    // setting genre filters...
    useEffect(() => {
        let gNamesArr = watchListArr.map(movie => {
            return getGenreFromId(movie.genre_ids[0])
        });
        let uniqueGenres = new Set(gNamesArr);
        setGenreList(['All Genres', ...uniqueGenres])
    }, [watchListArr])

    const getGenreFromId = id => {
        return GENRE_IDS_MAP[id];
    }

    const handleAscRatings = () => {
        console.log('asc order...')
        const sortedAscArr = watchListArr.sort((movie1, movie2) => movie1.vote_average - movie2.vote_average);
        console.log("sortedAscArr", sortedAscArr)
        setWatchListArr([...sortedAscArr]);
    }

    const handleDescRatings = () => {
        console.log('desc order...')
        const sortedDescArr = watchListArr.sort((movie1, movie2) => movie2.vote_average - movie1.vote_average);
        setWatchListArr([...sortedDescArr]);
    }

    const handleSearch = (ev) => {
        const { value } = ev.target;
        setSearch(value);
        // setSearch(ev.target.value)
    }

    const handleGenreFilter = genre => {
        setCurrentGenre(genre)
    }

    return (
        <>
            {/* genre filters */}
            <div className="flex justify-center m-4">
                {genreList.map((genre) => {
                    const isActive = currentGenre === genre;
                    const baseStyles = "flex justify-center items-center h-[3rem] w-[10rem] font-bold mx-4 text-white cursor-pointer";
                    const bgColor = isActive ? 'bg-blue-400' : 'bg-gray-600';
                    return <div onClick={() => handleGenreFilter(genre)} className={`${baseStyles} ${bgColor}`}>{genre}</div>
                })}
            </div>
            {/* input... */}
            <div className="flex justify-center">
                <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search movies..."
                    className="h-[3rem] w-[18rem] bg-gray-200 p-4 border border-gray-400"
                />
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full border-collapse bg-white text-left">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="py-6 px-4">Name</th>
                            <th>
                                <div className="flex">
                                    <i onClick={handleDescRatings} className="fa-solid fa-arrow-up hover:cursor-pointer mx-1"></i>
                                    Ratings
                                    <i onClick={handleAscRatings} className="fa-solid fa-arrow-down hover:cursor-pointer mx-1"></i>
                                </div>
                            </th>
                            <th>
                                <div className="flex">
                                    Popularity
                                </div>
                            </th>
                            <th>
                                <div className="flex">
                                    Release date
                                </div>
                            </th>
                            <th>
                                <div className="flex">
                                    Genre
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-x-gray-100 border-t border-gray-100">
                        {watchListArr
                            .filter((movie) => {
                                if (currentGenre === 'All Genres') {
                                    return true
                                } else {
                                    return currentGenre === getGenreFromId(movie.genre_ids[0])
                                }
                            })
                            .filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
                            .map((movie) => <tr>
                                <td key={movie.id} className="flex items-center px-6 py-4 gap-4">
                                    <img className="h-[6rem] w-[8rem] object-fit object-cover" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
                                    <div className="">{movie.title}</div>
                                </td>
                                <td>{movie.vote_average}</td>
                                <td>{movie.popularity}</td>
                                <td>{movie.release_date}</td>
                                <td>
                                    {movie.genre_ids.map((genreId) => <div key={genreId}>{getGenreFromId(genreId)}</div>)}
                                    {/* {getGenreFromId(movie.genre_ids[0])} */}
                                </td>
                            </tr>)}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default WatchList;