import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {

    render() {
        return (

            <div className="wrapper">
                <header>
                    <nav>
                        <div className="menu-icon">
                            <i className="fa fa-bars fa-2x"></i>
                        </div>
                        <div className="logo">
                            <Link className="navbar-brand" to='/Home' >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzYp7MWHvmubiwu5vX08XE5vQBv7Ui7fVvUBj_s_4O-ZikfQiJA " alt="" />
                            </Link>
                        </div>
                        <div className="menu">
                            <ul>
                               <li><Link class="mdl-navigation__link" to="/Home">
                                Home
                                </Link></li>
                                <li><Link class="mdl-navigation__link" to="/About">
                                about
                                </Link></li>
                                <li><Link class="mdl-navigation__link" to="/Blog">
                                blog
                                </Link></li>
                                <li><Link class="mdl-navigation__link" to="/Contact">
                                Contact
                                </Link></li>
                                <li><a href="#"></a></li>

                            </ul>
                        </div>
                    </nav>
                </header>


            </div>
        );
    }
}

export default Navbar;