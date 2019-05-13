import React, { Component } from 'react';


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
                            <a className="navbar-brand" href="n">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzYp7MWHvmubiwu5vX08XE5vQBv7Ui7fVvUBj_s_4O-ZikfQiJA " alt="" />
                            </a>
                        </div>
                        <div className="menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Services</a></li>

                            </ul>
                        </div>
                    </nav>
                </header>


            </div>
        );
    }
}

export default Navbar;