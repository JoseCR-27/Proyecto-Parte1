import React from 'react';

import { NavLink } from 'react-router-dom';

const Login = () =>{
    return(
        <div className="container mt-5 shadow-sm">
            <div className="row">
                <div className="registerImage col"></div>
                    <div className="card col p-3">            
                    <h2>Login</h2>
                    <form>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
                        </div>
                        <NavLink to="/register">Don't have an account?</NavLink>
                        <button type="submit" className="btn btn-MoreNews float-right">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;