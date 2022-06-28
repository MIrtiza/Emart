import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
import Layout from "./Layout"
import { useDispatch } from 'react-redux'
import { AddCart } from '../redux/action'
const ProductDetail = ()=>{
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const dispatch = useDispatch();
    const addProduct = (product) =>{
        dispatch(AddCart(product))
    }

    useEffect(()=>{
        const getProduct = async ()=>{
            setLoading(true);
            const response  = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    },[])

    const Loading = () =>{
        return(
            <>
            <div className="row">
                <div className="md-6">
                    <Skeleton height={400} />
                </div>
                <div className="md-6" style={{lineHeight:2}}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50}  />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{marginLeft:6}} />
                </div>
                </div>
            </>
        )
    }
    const ShowProduct = ()=>{
        return(
            <>
                <div className="col-md-6" key={product.id}>
                    <div className="img-wrap">
                        <img src={product.image} alt={product.title} />
                    </div>
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>
                        {product.title}
                    </h4>
                    
                    <p className='lead fw-bolder'>
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <p>category {product.category}</p>
                    <h3 className="display-6 fw-bold my-4"> price: {product.price} </h3>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={()=> addProduct(product)}> Add to Cart </button>

                    <p className=' py-4'> {product.description} </p>
              
                </div>
            </>
        )
    }
    return(
        <Layout>
        <div className='product-detail-sec'>
            <div className="container py-5">
                <div className="row py-5">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default ProductDetail