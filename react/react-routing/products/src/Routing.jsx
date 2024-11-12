import { Routes, Route, Link, useParams, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
function About() {
    return <h2>I m about page</h2>
}

function Home() {
    return <h2>I m Home page</h2>
}

function Product() {
    return <h2>I m Product page</h2>
}

function PageNotFound() {
    return <h2>Page not found...</h2>
}

function Cart() {
    return <h2>cart...</h2>
}

function Users(props) {
    console.log(props.isAdmin);
    const params = useParams();
    console.log(params);
    const userId = params.id;

    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const resp = await fetch(`https://fakestoreapi.com/users/${params.id}`);
                const data = await resp.json;
                setUser(data);
            } catch (e) {

            }
        }
        fetchData();
    }, [user])

    if (user === null) {
        return <h4>Loading... please wait!!</h4>
    }

    return (
        <>
            <h4>user name: {user?.username}</h4>
            <h4>Email: {user?.email}</h4>
            <h4>Name: {user?.name?.firstname} {user?.name?.lastname}</h4>
        </>
    )


}

function Routing() {
    return (
        <>
            <h1>Routing example...</h1>
            <nav>
                <ul>

                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/product'}>Product</Link></li>
                    <li><a href={'/cart'}>Cart</a></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/product' element={<Product />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/users/:id' element={<Users isAdmin={true} />}></Route>

                <Route path='/abc' element={<Navigate to={'/about'} />} ></Route>


                <Route path='*' element={<PageNotFound />}></Route>
            </Routes>
        </>
    )
}

export default Routing;





