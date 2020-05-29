import React from 'react';
import i1 from './img/1.jpg';

const MoreNew = (props) => {

    return (
        <div>
             <div className="d-flex justify-content-center p-4">
                    <div className="row no-gutters">
                        <div className="col-md-2">
                            <img src={i1} className="card-img" alt={i1}></img>
                        </div>
                        <div className="col-md-10">
                            <div className="card-body m-0 p-0 pl-3">
                                <h5 className="card-title">Esto seria el titulo de la noticia del genero escogido</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie et est a dapibus. Donec ut aliquam nibh, vel facilisis est. Nam commodo quis nisl quis tincidunt. Donec ut lectus velit. Etiam...</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );

}

export default MoreNew;