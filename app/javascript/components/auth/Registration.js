import React, { Component } from 'react';
import Axios from 'axios';

import Styled from 'styled-components';

const Wrapper= Styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
    width: 100px;
    height: 100px;
`

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registrationErros: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const {
            email,
            password,
            password_confirmation
        } = this.state;

        Axios.post("/api/v1/registrations", {
            user: {
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
        },
        { withCredentials: true }
        ).then(resp => {
            if(resp.data.status === 'created'){
                this.props.handleSuccessfulAuth(resp.data);
            }
        }).catch(error => {
            console.log("registration error: ", error);
        });

        event.preventDefault();
    }

    

    render() {
        return (
            <Wrapper>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="example@email.com" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        required 
                    />
                    <input 
                        type="password" 
                        name="password_confirmation" 
                        placeholder="Password Confirmation" 
                        value={this.state.password_confirmation} 
                        onChange={this.handleChange} 
                        required 
                    />
                    <button type="submit">Register</button>
                </form>
            </Wrapper>
        )
    };
}

export default Registration