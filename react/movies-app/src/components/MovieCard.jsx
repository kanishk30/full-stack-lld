function MovieCard(props) {
    const { movieObj, addToWatchList, watchList, removeFromWatchList } = props;
    const isMoviePresentInWatchList = (movieObj) => {
        // for watchlist array, check if movieObj is presnet in arr or not. if present return true, else false.
        const res = watchList.some((movie) => movie.id === movieObj.id);
        return res;
    }

    return (
        <div
            className="h-[40vh] w-[200px] bg-cover bg-center flex flex-col  rounded-2xl"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movieObj.poster_path})`
            }}
        >
            {isMoviePresentInWatchList(movieObj) ? <div
                className="rounded-2xl bg-gray-700/50 h-8 w-8 flex items-center justify-center m-4"
                onClick={() => removeFromWatchList(movieObj)}
                role="button"
            >❌

            </div> : <div
                className="rounded-2xl bg-gray-700/50 h-8 w-8 flex items-center justify-center m-4"
                onClick={() => addToWatchList(movieObj)}
                role="button"
            >
                😍
            </div>}
            <div title='jhdhajdjahjdahjdajd' className="text-white text-2xl rounded-2xl bg-gray-700/50  text-center w-full p-2">
                {movieObj.title}
            </div>
        </div>
    )
}

export default MovieCard