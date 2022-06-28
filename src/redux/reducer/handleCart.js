const cart =[
    
]

const handleCart = (state = cart, action) =>{   
    const product = action.payload; 
    switch (action.type){
        case "ADDITEM":
            
            const exist = state.find((x)=> x.id === product.id)
            console.log({exist , product,cart});
            if(exist){
                 return state.map((x)=> x.id === product.id ? {...x,qty: x.qty + 1}: x)
                // return [
                //     ...state,
                //     ...product,
        
                //     state.map((x)=> x.id === product.id ? {...x,qty: x.qty + 1}: x)
                // ]
            }else{
                const product =action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        qty: 1
                    }
                ]
            }
            case "DELITEM":
                const existitem = state.find((x)=>x.id === product.id)
                if(existitem.qty === 1){
                    return state.filter((x)=> x.id !== existitem.id)
                }else{
                    return state.map((x)=> x.id === product.id ? {...x, qty: x.qty -1 }: x)
                }

            case "INCREMENT":
                const theproduct = state.find((x)=> x.id ===  product.id)
                const index = state.findIndex((x)=> x.id === product.id)
                console.log(theproduct, index)
                return{
                    ...state,
                
                }
               

        default:
            return state;

    }
}

export default handleCart;