
export const AddCart = (product)=>{
    return{
        type: "ADDITEM",
        payload: product
    }
}

export const DelCart = (product)=>{
    return{
        type: "DELITEM",
        payload: product
    }
}


export const INCREMENTCart = (count)=>{
    return {
        type: "INCREMENT",
        payload: count
    }
}