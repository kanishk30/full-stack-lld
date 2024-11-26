import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserMiddleware } from "./redux/middleware/userMiddleware";


function User() {
    // const loading = useSelector((state) => state.user.loading)
    // const error = useSelector((state) => state.user.error)
    // const user = useSelector((state) => state.user.user)
    // SAME AS ABOVE
    const { loading, error, user } = useSelector((state) => state.user)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserMiddleware())
    }, [])

    if (error) {
        return <h4>Something went wrong.. retry later</h4>
    }
    if (loading) {
        return <h4>Loading...</h4>
    }
    return (
        <>
            <h3>User example</h3>
            <h5>Name: {user?.name}</h5>
            <h5>Phone: {user?.phone}</h5>

        </>
    )


}

export default User