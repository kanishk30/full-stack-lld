import { useState, useEffect } from "react"
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
import axios from 'axios';

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

    const [movies, setMovies] = useState([]);
    const [pageNo, setPageNo] = useState(1);


    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/trending/movie/day', {
            params: {
                api_key: 'e278e3c498ab14e0469bf6d86da17045',
                language: 'en-US',
                page: pageNo
            }
        }).then((response) => {
            console.log(response.data.results)
            setMovies(response.data.results)
        })
            .catch(e => console.log(e))
    }, [pageNo])


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