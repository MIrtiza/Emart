import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Dropdown } from './Dropdown'

const Navbar = ()=>{
    const state = useSelector((state)=> state.handleCart)
    var calbucketCount = state.length > 1 ? state.reduce(function (a, b) {
        return {qty: a.qty +  b.qty};
    }) : state.length  == 1 ? state[0] : state;
    // console.log(calbucketCount.qty);
    calbucketCount = state.length > 0 ? calbucketCount.qty : 0;
    console.log({calbucketCount})
    return (

        <>
            <nav className="navbar navbar-expand-lg bg-light bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">Emart</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons d-flex mx-2"> 
                        {/* <NavLink to="#" className="btn btn-outline-dark">
                            <i className="fa fa-sign-in me-1"></i>
                            Login
                        </NavLink>
                        <NavLink to="#" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-user-plus me-1"></i>
                            Register
                        </NavLink> */}
                        <Dropdown />
                        <NavLink to="/cart" className="btn-cart">
                            <i className="fa fa-shopping-cart"></i>
                             <span>{calbucketCount} </span> 
                        </NavLink>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar