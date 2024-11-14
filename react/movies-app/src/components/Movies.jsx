import { useState } from "react"
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";

const MOVIES_ARR = [
    {
        url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
        title: 'Shawshank Redemption'
    },
    {
        url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
        title: 'Batman Returns'
    },
    {
        url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
        title: 'Godfather'
    },
    {
        url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
        title: 'Main Hoon Na'
    },
    {
        url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
        title: 'DDLJ'
    },
    {
        url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
        title: 'K3G'
    },
    {
        url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
        title: 'Main Hoon Na'
    },
    {
        url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
        title: 'DDLJ'
    },
    {
        url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
        title: 'K3G'
    },
]

function Movies() {

    const [movies, setMovies] = useState(MOVIES_ARR);
    const [pageNo, setPageNo] = useState(1);

    const handleNext = () => {
        // this will be called on next btn click.
        setPageNo(pageNo + 1)
    }

    const handlePrev = () => {
        if (pageNo !== 1) {
            setPageNo(pageNo - 1)
        }
    }

    return (
        <div>
            <div className="text-2xl font-bold text-center">
                <h2>Trending movies</h2>
            </div>
            <div className="flex justify-evenly flex-wrap gap-8">
                {movies.map((movieObj) => <MovieCard movieObj={movieObj} />)}
            </div>

            <Pagination
                pageNumber={pageNo}
                handlePrevFn={handlePrev}
                handleNextFn={handleNext}
            />

        </div>
    )

}

export default Movies