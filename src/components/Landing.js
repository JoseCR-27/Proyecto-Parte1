import React from 'react';
import { NavLink } from 'react-router-dom';

const Landing = () => {


    return(

        <div scroll="no" className="background-landing">
            <div className="container">
                <div className="text-center">
                    <i className="fas fa-exclamation-circle"></i>
                    <h3 className="landing-h3">Error 404</h3>
                    <p className="my-4 landing-p">El contenido de está página no existe o está temporalmente fuera de servicio</p>
                    
                    <NavLink to="/"><button className="btn btn-landing btn-light">Llévame al incio</button></NavLink>
                </div>
            </div>
        </div>
    );
    
}

export default Landing;