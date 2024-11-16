import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Banner() {
    const [bannerImg, setBannerImg] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=e278e3c498ab14e0469bf6d86da17045`)
            .then((response) => {
                const firstMovieMeta = response.data.results[0];
                const fmTitle = firstMovieMeta.title;
                const fmImg = firstMovieMeta.backdrop_path;
                setTitle(fmTitle);
                setBannerImg(`https://image.tmdb.org/t/p/original${fmImg}`)
            })
            .catch(e => console.log(e))
    }, [])

    return (
        <div
            className="h-[20vh] md:h-[75vh] bg-cover bg-center  flex items-end"
            style={{
                backgroundImage: `url(${bannerImg})`
            }}
        >
            <div className="text-white text-2xl text-center w-full">
                {title}
            </div>
        </div>
    )
}

export default Banner