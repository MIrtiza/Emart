import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Layout from './Layout'
import { AddCart, DelCart } from '../redux/action'
import { NavLink } from 'react-router-dom';

export default function Cart() {
    const item = useSelector(state => state.handleCart);
    const dispatch = useDispatch();
    const addIncrement =(product)=>{
        dispatch(AddCart(product))
    }
    const Decrement =(product)=>{
        dispatch(DelCart(product))
    }
    // console.log(item)
    const [total, setTotal] = useState(0.0);
    useEffect(() => {
        // console.log({item})
        if(item.length > 1){
            var res = item.reduce(function (a, b) {
                console.log({a , b});
                return {price: a.price * a.qty + b.price* b.qty}; // returns object with property x
            });
            console.log(res.price)
            setTotal(res.price)
        }else{
            var res = item[0];
            res = res.price * res.qty;
            setTotal(res)
        }
    
        // console.log({item})
        // item.reduce(myFunc)
        // Update total when item qty changes
        // const newTotal = item.reduce(myFunc);
        // console.log({newTotal})

        // setTotal(newTotal)
      
    }, [item]) 

    // const myFunc =(box, value)=> {
    //     console.log("myFunc")
    //     var total = (box.qty * box.price) + (value.qty * value.price);
    //     console.log({total})
    //     return total
    //   }
    return (
        <Layout>
            <div className='container py-4 my-5'>

                {
                    item.length === 0 ? <p>cart is empty, <NavLink to="/">continoue shopping</NavLink></p> : 
                    item.map(cart => {
                        return (
                            <div className="row py-5 border-bottom">
                            
                                <>
                                    <div className="col-md-4">
                                        <img src={cart.image} alt="" style={{width: "100%", height: "300px", objectFit: "contain"}} />
                                    </div>
                                    <div className="col-md-4">
                                        <h3> {cart.title} </h3>
                                        <p className='lead'> {cart.description} </p>
                                        <p>Quantity: {cart.qty}</p>
                                        <strong className='lead fw-bold'> price:  {cart.price * cart.qty} </strong>
                                      
                                        <div className='mt-4'>
                                            <button className="btn btn-outline-dark me-4" onClick={()=> Decrement(cart)}>
                                                <i className='fa fa-minus'></i>
                                            </button>
                                            <button className='btn btn-outline-dark' onClick={() => addIncrement(cart)}>
                                                <i className='fa fa-plus'></i>
                                            </button>
                                        </div>

                                    </div>
                                </>
                            </div>
                        )
                    })
                }

                <div className="checkout">
                    <h2>GOVT Tax: 4%</h2>
                    <h2 className='my-4'>total price: {total} </h2>
                    <button className='btn btn-outline-dark px-5 py-2 green'>Checkout</button>
                </div>


            </div>
        </Layout>
    )
}
