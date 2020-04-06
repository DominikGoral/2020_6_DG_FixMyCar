import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Layout from './hoc/Layout/Layout'
import Workshop from './containers/Workshop/Workshop'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout'
import './App.css';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/"/>
        <Redirect to="/auth" />
      </Switch>
    )
    
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/workshop" component={Workshop}/>
          <Route path="/logout" component={Logout}/>
          <Redirect to="/" />
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
    isAuthenticated: state.auth.token !== null
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