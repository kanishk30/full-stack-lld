/**
 *  
 useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
                const data = await res.json();
                console.log(data);
                setUser(data);
            } catch (e) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])
 */
import { userLoading, userError, userData } from "../userSlice";

export const fetchUserMiddleware = () => {

    return async (dispatch) => {
        try {
            dispatch(userLoading(true));
            const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const data = await res.json();
            dispatch(userData(data))
        } catch (e) {
            dispatch(userError())
        } finally {
            dispatch(userLoading(false))
        }
    }


}