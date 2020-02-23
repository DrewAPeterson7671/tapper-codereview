import React from 'react';
import Header from './components/Header';
import KegList from './components/KegList';
import NewKegForm from './components/NewKegForm';
import Error404 from './components/Error404';
import { Switch, Route } from 'react-router-dom';
import Staff from './components/Staff';
import logo from './logo.svg';
import './App.css';
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
  this.setState({masterKegList: newMasterKegList});
}

render() {
  return (
    <div className='App'>
      <Header/>
      <Switch>
        <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />} />
        <Route path='/newkeg' render={()=><NewKegForm onNewKegAddition={this.handleNewKegSubmission} />} />
        <Route path='/staff' render={(props)=><Staff kegList={this.state.masterKegList} currentRouterPath={props.location.pathname}/>} />
        <Route component={Error404} />
      </Switch>



    </div>
  );
}
}

export default App;
