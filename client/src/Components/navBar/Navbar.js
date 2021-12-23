import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from "../../JS/userslice/userSlice";
import './nav.css'
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isAuth = localStorage.getItem("token");
    const isAdmin = localStorage.getItem("isAuth");
    const userRedux = useSelector((state) => state.user.user);


    const handlelogout =()=>{
        dispatch(logout());
        history.push('/');
        window.location.reload()
     }
     useEffect(() => {
        $(window).on('scroll',function(){
            if($(window).scrollTop()){
              $('nav').addClass('black');
            }else {
              $('nav').removeClass('black');
            }
          })
     }, [])
    
    return (
        <nav>
            <div className="logo">
                <Link to="/">
                    <img src={process.env.PUBLIC_URL +"/lg2.gif"} />
                </Link>
            </div>
            <ul>
                <Link to="/trajet">
                    <li><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-3dofso-0 gVVdlM mr-2" width="30" height="24" aria-hidden="true"><path stroke-width="0" fill="#00AFF5" fill-rule="evenodd" d="M1.14 11.5a10.36 10.36 0 1120.72 0 10.36 10.36 0 01-20.72 0zM11.5 0a11.5 11.5 0 100 23 11.5 11.5 0 000-23zm.57 6.53a.57.57 0 00-1.14 0v4.4h-4.4a.57.57 0 100 1.14h4.4v4.4a.57.57 0 101.14 0v-4.4h4.4a.57.57 0 000-1.14h-4.4z"></path></svg>
                        Publier un trajet</li>
                </Link>
                {isAdmin?
                <ul>
                    <Link to="/admin/home/"><li>Dashboard</li></Link>
                </ul>:null

                }
                {isAuth? 
                    <ul>
                        <Link to="/mestrajets">
                            <li>Mes trajets</li>
                        </Link>
                        <Link to="/profile">
                            <li>Mon Profile</li>
                        </Link>
                        <Link><li onClick={handlelogout}>Deconnexion</li></Link>
                        <li className="iimgg"><img className="imgg" src={userRedux?.image?`http://localhost:5000${userRedux?.image}`:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImJhY2tncm91bmQ6I2RkZCI+PHBhdGggZmlsbD0iI0RERCIgZD0iTTAgMGg0OHY0OEgweiIvPjxwYXRoIGQ9Ik0yNCAyOWMyLjM3IDAgNS4yNC4yNDggNy42MTEuNzQ1IDMuODk5LjU0NCA2LjU4IDMuMTQzIDcuNzQgNy4wNzNDMzUuNjg1IDQxLjIwOCAzMC4xNjkgNDQgMjQgNDRjLTYuMTggMC0xMS43MDYtMi44MDMtMTUuMzc1LTcuMjA4IDEuMTA2LTMuNzk0IDMuNjgtNi4yMzcgNy43NjQtNy4wNDdDMTguNzU5IDI5LjI0OCAyMS42MjkgMjkgMjQgMjl6bTAtMjFhOCA4IDAgMDE4IDh2MmE4IDggMCAxMS0xNiAwdi0yYTggOCAwIDAxOC04eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg=="}/></li>
                    </ul>
                    :
                    <ul>
                        <Link to='/connexion'>
                            <li>Connexion</li>
                        </Link>
                        <Link to="/inscription">
                            <li>Inscription</li>
                        </Link>
                    </ul>
                }  
                                  
            </ul>   
        </nav>
    );
}

export default Navbar;
