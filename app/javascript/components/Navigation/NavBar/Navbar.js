import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import axios from 'axios';

import './Navbar.css'

class Navbar extends Component {
    constructor(props){
        super(props);

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick() {
        axios.delete("/api/v1/logout", { withCredentials: true})
            .then(resp => {
                this.props.handleLogout();
            })
            .catch(err => {
                console.log("logout error", err)
            });
    }

    render() {
        let checkLoggedIn = false;
        if (this.props.loggedInStatus === 'LOGGED_IN'){
            checkLoggedIn = true
        }
        else {
            checkLoggedIn = false;
        }

        return (
            <Fragment>
                <div className="wrapper">
                    <div className="container">
                        <div className="navbar">
                            <Link to={`/`} className="navbarbtn">Home</Link>
                            { !checkLoggedIn ? <Link to={`/login`} className="navbarbtn" >Log on</Link> : null}  
                            { !checkLoggedIn ? <Link to={`/registrations`} className="navbarbtn">Register</Link> : null}
                            { checkLoggedIn ? <Link to={`/`} onClick={() => this.handleLogoutClick()} className="navbarbtn">Log Out</Link> : null}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }  
}

export default Navbar