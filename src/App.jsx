import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Error404 from './components/Error404';
import KegList from './components/KegList';
import NewKegForm from './components/NewKegForm';
import Staff from './components/Staff';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';


class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    masterKegList: {},
  };
  this.handleNewKegSubmission = this.handleNewKegSubmission.bind(this);
}

handleNewKegSubmission(newKeg){
  var newKegId = v4()
  var newMasterKegList = Object.assign({},
  this.state.masterKegList, {
    [newKegId]: newKeg
  });
}

render() {
  return (
    <div className='App'>
      <Header/>
      <Switch>
        <Route exact path='/' render={()=><KegList keglist={this.state.masterKegList} />} />
        <Route path='/newkeg' render={()=><NewKegForm onNewKegAdditiont={this.handleNewKegSubmission} />} />
        <Route path='/staff' render={(props)=><Staff kegList={this.state.masterKegList} currentRouterPath={props.location.pathname}/>} />
        <Route component={Error404} />
      </Switch>



    </div>
  );
}
}

export default App;
