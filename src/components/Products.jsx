import { useState, useEffect } from 'react'

import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom'
import Layout from "./Layout"
const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

  
    
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json())
                setLoading(false);
                console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                <Skeleton height={350} />
                </div>
               
            </>
        )
    }
    const setFilterProduct = (category)=>{
        const updatedList = data.filter((x)=>x.category === category);
        setFilter(updatedList);
    }
    const ShowProducts = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>setFilterProduct("men's clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>setFilterProduct("women's clothing")}>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>setFilterProduct("jewelery")}>Jewllers</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>setFilterProduct("electronics")}>Electronic</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-12 col-md-3" key={product.id}>
                                <div className="card h-100 text-center single-card"  >
                                    <img src={product.image} className="card-img-top " alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0,12)}... </h5>
                                        <p className="card-text lead fs-2 fw-bolder">$ {product.price} </p>
                                        <NavLink to={`/products/${product.id}`}  className="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )

    }

    return (
        <div className="container  my-3 py-3">
            <div className="row">
                <div className="col-12">
                    <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    )
}

export default Products