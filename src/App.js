import React, {Component} from 'react';

import './App.css';
import Login from './pages/Login';
import { USER_URL } from './utils/Constants';

import { createTheme }  from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export const THEME = createTheme();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { user: "user" };
  }

  componentDidMount() {
    fetch(USER_URL)
      .then((response) => response.json())
      .then((responseData) => { this.setState({ user: responseData._embedded.user }); })
      .catch((err) => console.error("THIS IS A SERIOUS ERROR INDEED!" + err));
  }

  render() {
    return(
      <div className='App'>
        <Login />  
      </div>
    )
  }
}

export default App;