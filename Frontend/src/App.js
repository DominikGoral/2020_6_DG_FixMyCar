import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Layout from './hoc/Layout/Layout'
import Workshop from './containers/Workshop/Workshop'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout'
import './App.css';
import WorkshopItems from './containers/Workshop/WorkshopItems/WorkshopItems';
import WorkshopDetails from './containers/Workshop/WorkshopDetails/WorkshopDetails'
import Profile from './containers/Profile/Profile'
import WorkshopMap from './containers/Map/WorkshopMap'
import VehicleItems from './containers/Vehicles/VehicleItems/VehicleItems'
import VehicleDetails from './containers/Vehicles/VehicleDetails/VehicleDetails'

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/workshop/all" component={WorkshopItems} />
        <Route path="/workshop/:id" component={WorkshopDetails}/>
        <Route path="/"/>
        <Redirect to="/workshop/all" />
      </Switch>
    )
    
    if (this.props.isAuthenticated && this.props.mechanic) {
      routes = (
        <Switch>
          <Route path="/workshop" component={Workshop}/>
          <Route path="/logout" component={Logout}/>
          <Redirect to="/" />
        </Switch>
      )
    } else if (this.props.isAuthenticated && this.props.customer) {
      routes = (
        <Switch>
          <Route path="/logout" component={Logout}/>
          <Route path="/workshop/all" component={WorkshopItems} />
          <Route path="/workshop/:id" component={WorkshopDetails}/>
          <Route path="/vehicle/all" component={VehicleItems} />
          <Route path="/vehicle/:id" component={VehicleDetails}/>
          <Route path="/me" component={Profile} />
          <Redirect to="/workshop/all" />
        </Switch>
      )
    }

    return(
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    mechanic: state.auth.mechanic,
    customer: state.auth.customer
  }
}


export default withRouter(connect(mapStateToProps)(App))
/*
  componentDidMount() {
    axios.get('http://localhost:8001/')
      .then(res => {
        const services = res.data
        this.setState({ services })
        console.log(services)
      })
  }

  postDataHandler = () => {
    const service = {
      ServiceName: this.state.ServiceName
    }
    axios.post('http://localhost:8001/', service)
      .then(res => {
        console.log(service)
      })
  }
}

export default App;
*/