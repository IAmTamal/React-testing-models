import React, { useState } from 'react'
import "../styles/Login.css"

const Login = () => {

    const [creds, setcreds] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setcreds({ ...creds, [name]: value });
    }
    return (
        // make a login form with email and password

        <div className='container login_parent_main'>

            <form className='login_parent_1'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Email' aria-describedby="emailHelp" name='email' value={creds.email} onChange={handleChange} />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password' name='password' value={creds.password} onChange={handleChange} />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>



    )
}

export default Login