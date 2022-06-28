import Layout from "./Layout"
import Products from "./Products"
const Home = () => {
    return (
        <>
            <Layout>
                <div className="hero-banner">
                    <div className="card bg-dark text-white border-0">
                        <img src="/assets/images/cover.jpeg" className="card-img-top" alt="..." />
                        <div className="card-img-overlay d-flex flex-column justify-content-center">
                            <div className="container">
                            <h5 className="card-title display-3 fw-bolder mb-0">Summer Collection</h5>
                            <p className="card-text lead fs-2">Check out all the trends</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                     
                        </div>
                    </div>
                </div>
                <Products />
             

            </Layout>
        </>
    )
}

export default Home