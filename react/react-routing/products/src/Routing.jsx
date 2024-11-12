import { Routes, Route, Link } from 'react-router-dom'

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
                <Route path='*' element={<PageNotFound />}></Route>
            </Routes>
        </>
    )
}

export default Routing;





