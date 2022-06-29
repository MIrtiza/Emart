
export const InputField = (props)=>{
    return(
        <>
            <div className="mb-3">
                <label htmlFor={props.htmlfor} className="form-label"> {props.label} </label>
                <input type={props.type} className="form-control" id={props.id} />
            </div>
        </>
    )
}