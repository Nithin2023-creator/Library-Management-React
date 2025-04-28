// LibraryApp.js (Main Controller)
import React, { Component } from 'react';
import './LibraryApp.css';
import LoginPage from './LoginPage';
import AdminLibraryPage from './components/AdminLibrary';
import CustomerLibraryPage from './components/CustomerLibrary';

class LibraryApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      role: '',
      username: ''
    };
  }

  handleLogin = (role, username) => {
    this.setState({
      isLoggedIn: true,
      role,
      username
    });
  };

  render() {
    const { isLoggedIn, role, username } = this.state;

    if (!isLoggedIn) {
      return <LoginPage onLogin={this.handleLogin} />;
    }

    if (role === 'admin') {
      return <AdminLibraryPage username={username} />;
    } else if (role === 'customer') {
      return <CustomerLibraryPage username={username} />;
    }

    return null;
  }
}

export default LibraryApp;
