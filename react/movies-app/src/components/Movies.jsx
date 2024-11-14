import { useState } from "react"
import Pagination from "./Pagination";

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
                {movies.map((movieObj, i) => {
                    return (
                        <div
                            className="h-[40vh] w-[200px] bg-cover bg-center 
                            flex flex-col  rounded-2xl"
                            style={{
                                backgroundImage: `url(https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68)`
                            }}
                        >
                            <div className="text-white text-2xl rounded-2xl bg-gray-700/50  text-center w-full p-2">
                                {movieObj.title}
                            </div>
                        </div>
                    )
                })}
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