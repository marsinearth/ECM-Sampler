import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from './components/Footer';
import VisibleAlbumList from './containers/VisibleAlbumList'
import './App.css';
//import samplerStore from './reducers';

const App = () => (
  <div>
    <VisibleAlbumList />
    <Footer />
  </div>
);

export default App;
