/**
 *  
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
 */
import { movieData, movieError, movieLoading } from "../movieSlice";

export const fetchMovieMiddleware = () => {

    return async (dispatch) => {
        try {
            dispatch(movieLoading(true));
            const res = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=e278e3c498ab14e0469bf6d86da17045&language=en-US&pageNo=1");
            const moviesObj = await res.json();
            console.log(moviesObj)
            dispatch(movieData(moviesObj.results))
        } catch (e) {
            dispatch(movieError())
        } finally {
            dispatch(movieLoading(false))
        }
    }


}