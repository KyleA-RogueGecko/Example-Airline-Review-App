import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Airlines from './Airlines/Airlines';
import Airline from './Airline/Airline';
import Navbar from './Navigation/NavBar/Navbar';
import Registrations from './auth/Registration';
import Login from './auth/Login';
import axios from 'axios';

import Styled from 'styled-components'

const Body= Styled.div`
   padding: 0; 
   margin: 0; 
`

class App extends Component {
    constructor() {
        super();

        this.state= {
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(data){
        this.handleLogin(data);
        this.props.history.push("/");
    }

    checkLoginStatus() {
        axios.get("/api/v1/logged_in", { withCredentials: true})
            .then(resp => {
                if(resp.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN"){
                    this.setState({
                        loggedInStatus: "LOGGED_IN",
                        user: resp.data.user
                    })
                }
                else if (!resp.data.logged_in && this.state.loggedInStatus === "LOGGED_IN"){
                    this.setState({
                        loggedInStatus: "NOT_LOGGED_IN",
                        user: {}
                    })
                }
            })
            .catch(err => {
                console.log("check login error", err);
            });
    }

    componentDidMount() {
        this.checkLoginStatus();
    }

    handleLogout() {
        this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {} 
        })
    }

    handleLogin(data) {
        this.setState({
            loggedInStatus: "LOGGED_IN",
            user: data.user
        });
    }

    render () {
        return (
        <Body>
            <Navbar 
                handleLogout={this.handleLogout}
                loggedInStatus={this.state.loggedInStatus}    
            />
            <Switch>
                <Route exact path="/" component={Airlines}/>
                <Route exact path="/airlines/:slug" component={Airline}/>
                <Route exact path="/registrations"
                    render={props => (
                        <Registrations 
                            {...props}
                            handleSuccessfulAuth={this.handleSuccessfulAuth}
                    />)}
                />
                <Route exact path="/login"
                    render={props => (
                        <Login 
                            {...props}
                            handleSuccessfulAuth={this.handleSuccessfulAuth}
                    />)}
                />
                <Redirect to="/" component={Airlines}/>
            </Switch>
        </Body>
    )
    }
}

export default App