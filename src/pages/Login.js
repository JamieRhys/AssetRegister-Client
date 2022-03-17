import React, {Component} from 'react';

import './styles/Login.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import { SERVER_URL } from '../utils/Constants';
import ActiveAssetTable from './ActiveAssetTable';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            isAuthenticated: false,
            open: false
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleClose = (event) => {
        this.setState({ open: false });
    }

    login = () => {
        const user = {username: this.state.username, password: this.state.password};

        fetch(SERVER_URL + "/login", { 
            method: 'POST', 
            body: JSON.stringify(user),
            headers: {"Content-Type": "application/x-www-form-urlencoded" }
        })
        .then(response => {
            const jwtToken = response.headers.get("Authorization");

            if(jwtToken !== null) {
                sessionStorage.setItem("jwt", jwtToken);
                sessionStorage.setItem("username", this.state.username);
                this.setState({isAuthenticated: true});
            }
        })
        .catch(err => console.error(err));
    }

    render() {
        //return (<Home />)

        if(this.state.isAuthenticated === true) {
            return(         
              <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/active-asset-table" element={ <ActiveAssetTable /> } />
              </Routes>);
        } else {
            return(
                <div className='login-container'>
                    <div className='login-box'>
                        <div className='login-title'>
                            <h2>Welcome</h2>    
                        </div>  
                        <div className='login-content'>
                            <MuiThemeProvider>
                                <h1>Asset Register</h1>    
                                <TextField name="username" placeholder="Username" onChange={this.handleChange} />
                                <br />
                                <TextField name="password" placeholder="Password" type="password" onChange={this.handleChange} />
                                <br />
                                <br />
                                <Button onClick={this.login} variant="outlined" color="primary">Login</Button>
                                <Snackbar open={this.state.open} onClose={this.handleClose} autoHideDuration={2000} message="Check your password" />
                            </MuiThemeProvider>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Login;