import React from 'react';

import { NavLink } from 'react-router-dom';

function Header ()  {
       
    //Cambia entre responsivo y no cada vez que se apreta el boton de icon en el menu de celular
    function navbarMobile (e) {
        var x = document.getElementById("myTopnav");
        e.preventDefault();
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    };

    // Cuando se baja la pantalla se ejecuta esta funcion
    window.onscroll = function() {myFunction()};

    //Agrega la clase sticky a al header cuando se baja la pantalla. Quita sticky cuando se vuelve al estado inicial de la pagina 
    function myFunction() {
        // Variable de header
        var header = document.getElementById("myTopnav");

        // Ve o encuentra la offsetTop del header 
        var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    }

    return (
        <div>
            <div className="topnav-Mobile">
                <p>G-News</p>
            </div>
            <div className="g-news">
                <p>G-News</p>
            </div>
            <div className="topnav" id="myTopnav">

                <NavLink href="#Mundo" className="active" activeClassName="active" to="/">Mundo</NavLink>

                <a href="#Deportes" className="hover-border start-home">Deportes</a>
                <a href="#Entretenimiento" className="hover-border">Entretenimiento</a>
                <a href="#Economia" className="hover-border">Economia</a>
                
                <NavLink className="login hover-border-login" exact activeClassName="active" to="/login"><i className="fas fa-user"></i></NavLink>

                <NavLink exact activeClassName="active" className="loginPC" to="/login">Login</NavLink>
                
                <a href="#" className="icon" onClick={navbarMobile}>
                <i className="fas fa-ellipsis-v"></i>
                </a>
            </div>
        </div>
    );
};

export default Header;
