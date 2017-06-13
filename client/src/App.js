import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);    
    this.state = { users: [] };
  }

  componentDidMount() {    
    fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({ users }));   
  }

  render() {    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>Users</h1>
	{this.state.users.map(user =>
	  <div key={user.id}>{user.username}</div>
	}
      </div>
    );
  }
}

export default App;
