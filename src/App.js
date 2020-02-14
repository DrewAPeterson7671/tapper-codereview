import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import KegMenu from './components/KegMenu';
import KegList from './components/KegList';

function App() {
  return (
    <div className='App'>
      <Header/>
      <KegMenu/>
      <KegList/>

    </div>
  );
}

export default App;
