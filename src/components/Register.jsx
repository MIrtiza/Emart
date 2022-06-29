import { InputField } from './InputField'

const Register = () => {
    return (
        <>
            <section className="general-form-sec">
                <div className="bg-cover">
                    <img src="/assets/images/cover.jpeg" alt="" />
                </div>
                <div className="container-fluid p-0 h-100">
                    <div className="row h-100">
                        <div className="col-md-3">
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
                        <div className="col-md-9 h-100">
                            <div className="form-wrapper">
                                <div className="whitebg"></div>
                                <form>
                                    <InputField htmlFor="firstname" label="First Name" type="text" id="firstname" />
                                    <InputField htmlFor="lastname" label="Last Name" type="text" id="lastname" />
                                    <InputField htmlFor="username" label="User Name" type="text" id="username" />
                                    <InputField htmlFor="email" label="Email" type="email" id="email" />
                                    <InputField htmlFor="password" label="Password" type="password" id="password" />
                                    <InputField htmlFor="city" label="City" type="text" id="city" />
                                    <InputField htmlFor="street" label="Street" type="text" id="street" />
                                    <InputField htmlFor="stnumber" label="Street Number" type="text" id="stnumber" />
                                    <InputField htmlFor="zipcode" label="Zip Code" type="text" id="zipcode" />
                                    <InputField htmlFor="phone" label="Phone" type="text" id="phone" />                 
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

export default Register