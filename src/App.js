import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Keg from './components/Keg';
import KegList from './components/KegList';
import NewKegForm from './components/NewKegForm';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route path='/NewKegForm' component={NewKegForm} />
      </Switch>



    </div>
  );
}

export default App;
