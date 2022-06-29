

const Login = () => {
    return (
        <>
            <section className="general-form-sec">
                <div className="container-fluid p-0 h-100">
                    <div className="row h-100">
                        <div className="col-md-4">
                            <div className="logo-wrapper">
                                <h3>Emart</h3>
                            </div>
                            <div className="company-detail">
                                <small>Emart Enterprices</small>
                                <h6>Enhance your future with quality outfit</h6>
                                <i>Empower smarter design. Go to market faster. Spark design-driven innovation.</i>
                            </div>
                            <div className="sponsors">
                                <small>TRUSTED BY THE WORLD'S SMARTEST COMPANIES</small>
                                <ul>
                                    <li><img src="" alt="" /></li>
                                    <li><img src="" alt="" /></li>
                                    <li><img src="" alt="" /></li>
                                    <li><img src="" alt="" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="form-wrapper">
                                <form>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login