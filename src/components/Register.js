import React from 'react';
import { NavLink } from 'react-router-dom';

class Register extends React.Component{

    state={
        nombre:'',
        apellido:'',
        email:'',
        password:''  
    };

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit = () => {

        if(this.state.nombre === '') { return;}
        if(this.state.apellidos === '') { return;}
        if(this.state.email === '') { return;}
        if(this.state.password === '') { return;}

    };



    render=()=>{
        return(
            <div className="container mt-5 shadow-sm">
                <div className="row">
                    <div className="registerImage col"></div>
                        <div className="card col p-3">            
                        <h2>Register</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" id="nombre" name="nombre" aria-describedby="emailHelp" placeholder="Enter name" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" className="form-control" id="apellido" name="apellido" aria-describedby="emailHelp" placeholder="Enter last name" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                            </div>
                            <NavLink to="/login" className="">Have an account?</NavLink>
                            <button type="submit" className="btn btn-MoreNews  float-right">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

export default Register;