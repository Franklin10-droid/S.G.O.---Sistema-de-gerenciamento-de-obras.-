import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import Signup from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import CreateMaterials from './components/materials/CreateMaterials'
import FeedBack from './components/feedback/FeedBack'
import CreateCliente from './components/clientes/CreateCliente'

class App extends Component{
  render(){
    return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/project/:id' component={ProjectDetails}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/createproject' component={CreateProject}/>
          <Route path='/creatematerials' component={CreateMaterials}/>
          <Route path='/feedback' component={FeedBack}/>
          <Route path='/createcliente' component={CreateCliente}/>
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
