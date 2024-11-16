function MovieCard(props) {
    const { movieObj } = props;
    console.log(movieObj)
    return (
        <div
            className="h-[40vh] w-[200px] bg-cover bg-center flex flex-col  rounded-2xl"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movieObj.poster_path})`
            }}
        >
            <div title='jhdhajdjahjdahjdajd' className="text-white text-2xl rounded-2xl bg-gray-700/50  text-center w-full p-2">
                {movieObj.title}
            </div>
        </div>
    )
}

export default MovieCard